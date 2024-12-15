# app/routes/tracks.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Track management endpoints."""
from typing import Optional

from fastapi import APIRouter, HTTPException, Depends

from app.authentication import get_current_active_user
from app.config_database import get_db
from app.database_models import TracksTable, PrivacyType, UsersTable
from app.pydantic_models import User

router = APIRouter()

@router.post("/create")
async def create_new_track(track_name: str, explicit_privacy_type: Optional[PrivacyType] = None, current_user: User = Depends(get_current_active_user)):
    try:
        if not track_name.strip():
            raise HTTPException(status_code=400, detail="Track name must not be empty.")

        db = next(get_db())
        current_user_id = current_user.pkey_id

        user_default_privacy_type = db.query(UsersTable).filter(UsersTable.pkey_id == current_user_id).first().default_privacy_type

        row = TracksTable(
            fkey_owner=current_user_id,
            track_name=track_name,
            privacy_type=explicit_privacy_type or user_default_privacy_type
        )
        db.add(row)
        db.commit()
        db.refresh(row)
        return {"detail": "Created track", "id": row.pkey_id}
    except Exception as unexpected_error:
        raise HTTPException(status_code=500, detail="An unexpected error occurred. Please contact support if this persists.") from unexpected_error