# app/routes/user.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""User management endpoints."""

from fastapi import APIRouter

router = APIRouter()

@router.post("/create")
async def create_user():
    return 'create'

@router.get("/read/{uuid}")
async def read_user():
    return 'read'

@router.post("/update")
async def update_user():
    return 'update'

@router.delete("/delete")
async def delete_user():
    return 'delete'