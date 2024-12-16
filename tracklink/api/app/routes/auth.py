# app/routes/authLogic.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Authentication endpoints."""
from datetime import timedelta, datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import inspect

from app.authLogic import authenticate_user, ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token, get_user_from_token, \
    update_user_last_active
from app.pydantic_models import Token, User

router = APIRouter()

@router.post("/token", response_model=Token)
async def create_token_from_login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)

    if not user:
        raise HTTPException(status_code=401, detail="create_token_from_login() :: Failed to authenticate")

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": user.email}, expires_delta=access_token_expires)

    update_user_last_active(user.pkey_id)

    result = {
        "access_token": access_token,
        "token_type": "bearer"
    }

    return result

@router.get("/session/validate", summary="Check if the current session is still valid.")
async def validate_and_extend_session(current_user: User = Depends(get_user_from_token)):
    try:
        now = datetime.now(timezone.utc)

        if current_user.last_active.tzinfo is None:
            last_active_utc = current_user.last_active.replace(tzinfo=timezone.utc)
        else:
            last_active_utc = current_user.last_active

        session_expires = last_active_utc + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        token_valid = session_expires >= now

        if token_valid:
            update_user_last_active(current_user.pkey_id)

            return {
                "token_valid": token_valid,
                "last_active": current_user.last_active.isoformat(),
                "valid_until": session_expires.isoformat(),
                "user": {
                    c.key: getattr(current_user, c.key)
                    for c in inspect(current_user).mapper.column_attrs
                }
            }
        else:
            return {
                "token_valid": token_valid
            }
    except Exception as e:
        raise e

@router.get("/current", response_model=User)
async def get_current_user_information(current_user: User = Depends(get_user_from_token)):
    return current_user