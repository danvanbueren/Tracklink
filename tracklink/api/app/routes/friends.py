# app/routes/friends.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Friend request and list endpoints."""

from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy import and_
from sqlalchemy.exc import SQLAlchemyError

from app.authentication import get_current_active_user
from app.config_database import get_db
from app.database_models import UsersTable, FriendRequestsTable
from app.pydantic_models import User

router = APIRouter()

@router.get("/list")
async def get_friends_of_current_user(current_user: User = Depends(get_current_active_user)):
    try:
        db = next(get_db())
        current_user_id = current_user.pkey_id

        friends = (
            db.query(UsersTable)
            .join(FriendRequestsTable, FriendRequestsTable.fkey_request_recipient == UsersTable.pkey_id)
            .filter(
                and_(
                    FriendRequestsTable.fkey_request_owner == current_user_id,
                    FriendRequestsTable.request_response == True
                )
            )
            .all()
        )

        if not friends:
            raise HTTPException(status_code=404, detail="No friends found")

        return [
            {
                "pkey_id": friend.pkey_id,
                "display_name": friend.display_name,
                "last_active": friend.last_active,
            }
            for friend in friends
        ]


    except HTTPException as http_error:
        raise http_error
    except SQLAlchemyError as db_error:
        raise HTTPException(
            status_code=503,
            detail="A database error occurred while processing your request. Please try again later."
        ) from db_error
    except Exception as unexpected_error:
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred. Please contact support if this persists."
        ) from unexpected_error

@router.post("/request/create/{user_id}")
async def create_new_friend_request(user_id: int, current_user: User = Depends(get_current_active_user)):
    try:
        db = next(get_db())
        current_user_id = current_user.pkey_id

        raise HTTPException(status_code=501, detail="Endpoint not yet implemented")

    except Exception as unexpected_error:
        raise HTTPException(status_code=500,
                            detail="An unexpected error occurred. Please contact support if this persists.") from unexpected_error

# respond to friend request
@router.post("/request/respond/{friend_request_id}/{decision_bool}")
async def respond_to_pending_friend_request(friend_request_id: int, decision_bool: bool, current_user: User = Depends(get_current_active_user)):
    try:
        db = next(get_db())
        current_user_id = current_user.pkey_id

        raise HTTPException(status_code=501, detail="Endpoint not yet implemented")

    except Exception as unexpected_error:
        raise HTTPException(status_code=500,
                            detail="An unexpected error occurred. Please contact support if this persists.") from unexpected_error

# get list of friend requests
@router.get("/requests")
async def get_list_of_open_friend_requests(current_user: User = Depends(get_current_active_user)):
    try:
        db = next(get_db())
        current_user_id = current_user.pkey_id

        raise HTTPException(status_code=501, detail="Endpoint not yet implemented")

    except Exception as unexpected_error:
        raise HTTPException(status_code=500, detail="An unexpected error occurred. Please contact support if this persists.") from unexpected_error