# app/authLogic.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Authentication boilerplate."""

from datetime import timedelta, datetime, timezone
from typing import Optional

from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from passlib.context import CryptContext
import json

from app.config_database import get_db
from app.database_models import UsersTable
from app.pydantic_models import UserInDB, TokenData

# FOR DEVELOPMENT PURPOSES, NOT USING SECRET KEY
# CHANGE TO .ENV SECRET FOR DEPLOYMENT!!

# from decouple import config
#
# SECRET_KEY = config("SECRET_KEY")
# ALGORITHM = config("ALGORITHM")
# ACCESS_TOKEN_EXPIRE_MINUTES = config("ACCESS_TOKEN_EXPIRE_MINUTES", cast=int)

SECRET_KEY = "dd91a87bb8b2cd5478d84316c6813cb10096598e5a0ec2cf48c7ff8e051451ae"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(plain_password):
    return pwd_context.hash(plain_password)

def update_user_last_active(pkey_id: int):
    try:
        db = next(get_db())
        user = db.query(UsersTable).filter(UsersTable.pkey_id == pkey_id).first()

        if user is None:
            raise HTTPException(status_code=404, detail="update_user_last_active() :: User not found")

        user.last_active = datetime.now(timezone.utc)
        db.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail="update_user_last_active() :: " + str(e))

def get_user(pkey_id: Optional[int] = None, email: Optional[str] = None, display_name: Optional[str] = None):
    try:
        db = next(get_db())

        if pkey_id:
            user_data = db.query(UsersTable).filter(UsersTable.pkey_id == pkey_id).first()
        elif email:
            user_data = db.query(UsersTable).filter(UsersTable.email == email).first()
        elif display_name:
            user_data = db.query(UsersTable).filter(UsersTable.display_name == display_name).first()
        else:
            raise HTTPException(status_code=500, detail="get_user() :: Programmatic error: No user data provided")

        if user_data is None:
            print("get_user() :: User not found")
            return None

        return user_data
    except Exception as e:
        raise 'get_user() :: ' + str(e)

def authenticate_user(email: str, password: str):
    user = get_user(email=email)

    if not user:
        raise HTTPException(status_code=404, detail="authenticate_user() :: User not found")

    if not verify_password(password, user.password_hash):
        raise HTTPException(status_code=401, detail="authenticate_user() :: Failed to authenticate")

    return user

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    if not isinstance(data, dict):
        raise ValueError("create_access_token() :: `data` object must be of type `dict`")

    to_encode = data.copy()

    try:
        json.dumps(to_encode)  # Validate if data is JSON serializable
    except Exception as e:
        raise 'create_access_token() :: ' + str(e)

    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt

async def get_user_from_token_including_disabled(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")

        if email is None:
            raise HTTPException(status_code=401, detail="get_user_from_token_including_disabled() :: Malformed payload")

        token_data = TokenData(email=email)
    except Exception as e:
        raise 'get_user_from_token_including_disabled() :: ' + str(e)

    user = get_user(email=token_data.email)

    if user is None:
        raise HTTPException(status_code=401, detail="get_user_from_token_including_disabled() :: User not found despite decoded token")

    return user

async def get_user_from_token(current_user: UserInDB = Depends(get_user_from_token_including_disabled)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="get_user_from_token() :: User account is disabled")

    return current_user

