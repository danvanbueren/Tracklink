# app/routes/authLogic.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Authentication endpoints."""
from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import inspect

from app.authLogic import authenticate_user, ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token, get_user_from_session
from app.pydantic_models import Token, User

router = APIRouter()

@router.post("/token", response_model=Token)
async def create_token_from_login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)

    if not user:
        raise HTTPException(status_code=401, detail="Failed to authenticate")

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": user.email}, expires_delta=access_token_expires)

    result = {
        "access_token": access_token,
        "token_type": "bearer"
    }

    return result

@router.get("/session/validate", summary="Check if the current session is still valid.")
async def validate_session(current_user: User = Depends(get_user_from_session)):

    valid_until = '?'

    return {
        "token_valid": True,
        "valid_until": valid_until,
        "user": {
            c.key: getattr(current_user, c.key)
            for c in inspect(current_user).mapper.column_attrs
        }
    }

@router.get("/current", response_model=User)
async def get_current_user_information(current_user: User = Depends(get_user_from_session)):
    return current_user