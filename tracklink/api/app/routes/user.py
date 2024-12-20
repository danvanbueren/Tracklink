# app/routes/user.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""User management endpoints."""

from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr

from app.authLogic import get_user_from_token, get_password_hash
from app.config_database import get_db
from app.database_models import UsersTable
from app.pydantic_models import User

router = APIRouter()

# Request body schema
class CreateUserRequest(BaseModel):
    email: EmailStr
    password: str
    display_name: str

@router.post("/create")
async def create_new_user(user: CreateUserRequest):
    try:
        db = next(get_db())
        row = UsersTable(
            email=str(user.email),
            password_hash=get_password_hash(user.password),
            display_name=user.display_name
        )
        db.add(row)
        db.commit()
        db.refresh(row)
        return {"detail": "Created user", "id": row.pkey_id}
    except Exception as e:
        raise e

@router.get("/read/{user_id}")
async def read_user(user_id: int):
    try:
        db = next(get_db())
        users = db.query(UsersTable).filter(UsersTable.pkey_id == user_id).first()
        if not users:
            raise HTTPException(status_code=404, detail="User not found")
        return {
            'id': users.pkey_id,
            'email': users.email,
            'display_name': users.display_name,
        }
    except Exception as e:
        raise e

# TODO: delete devtool for production
@router.get("/DEVTOOL_LIST_DEVTOOL")
async def list_all_users_devtool():
    try:
        db = next(get_db())

        users = db.query(UsersTable).all()

        if not users:
            raise HTTPException(status_code=404, detail="No users found")

        return users
    except Exception as e:
        raise e

@router.post("/update/display_name/{new_display_name}")
async def update_current_user_display_name(new_display_name: str, current_user: User = Depends(get_user_from_token)):
    try:
        db = next(get_db())
        current_user_id = current_user.pkey_id

        # Check if the new display name already exists
        existing_user = db.query(UsersTable).filter(UsersTable.display_name == new_display_name).first()
        if existing_user:
            raise HTTPException(status_code=400, detail="update_current_user_display_name() :: Display name already in use")

        # Update the display name in the database
        user = db.query(UsersTable).filter(UsersTable.pkey_id == current_user_id).first()

        if not user:
            raise HTTPException(status_code=404, detail="update_current_user_display_name() :: User not found")

        old_display_name = user.display_name
        user.display_name = new_display_name
        db.commit()
        db.refresh(user)

        return {
            "detail": "Display name updated",
            "id": current_user_id,
            "old_display_name": old_display_name,
            "new_display_name": new_display_name
        }

    except Exception as e:
        raise e

@router.delete("/delete")
async def delete_current_user(current_user: User = Depends(get_user_from_token)):
    try:
        db = next(get_db())
        current_user_id = current_user.pkey_id

        raise HTTPException(status_code=501, detail="Endpoint not yet implemented")

    except Exception as e:
        raise e