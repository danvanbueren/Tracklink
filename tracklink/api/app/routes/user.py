# app/routes/user.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""User management endpoints."""

from fastapi import APIRouter, HTTPException
from app.database import SessionLocal
from app.models import UsersTable

router = APIRouter()

@router.post("/create")
async def create_user(email: str, password: str, display_name: str):

    db = SessionLocal()
    row = UsersTable(email=email, hashed_password=password, display_name=display_name)
    db.add(row)
    db.commit()
    db.refresh(row)
    db.close()

    return {"id": row.id}

@router.get("/read/{uuid}")
async def read_user(user_id: int):
    db = SessionLocal()
    users = db.query(UsersTable).filter(UsersTable.id == user_id).first()
    db.close()
    if not users:
        raise HTTPException(status_code=404, detail="User not found")
    return {
        'id': users.id,
        'email': users.email,
        'display_name': users.display_name,
    }



@router.post("/update")
async def update_user():
    return 'update'

@router.delete("/delete")
async def delete_user():
    return 'delete'