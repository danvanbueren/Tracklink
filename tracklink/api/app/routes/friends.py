# app/routes/friends.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Friend request and list endpoints."""

from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy import and_
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.authentication import get_current_active_user
from app.config_database import get_db
from app.database_models import UsersTable, FriendRequestsTable
from app.pydantic_models import User

router = APIRouter()

@router.get("/test")
async def testtest(current_user: User = Depends(get_current_active_user)):
    return current_user

@router.get("/list")
async def read_friends(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    try:
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

@router.post("/request/add/{user_id}")
async def create_friend_request(user_id: int):
    raise HTTPException(status_code=501, detail="Endpoint not yet implemented")

# respond to friend request
@router.post("/request/response/{friend_request_id}/{decision_bool}")
async def create_friend_request(friend_request_id: int, decision_bool: bool):
    raise HTTPException(status_code=501, detail="Endpoint not yet implemented")

# get list of friend requests

