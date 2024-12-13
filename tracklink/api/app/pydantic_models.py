# app/pydantic_models.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Base definitions for API requests and responses."""
from datetime import datetime
from typing import List

from pydantic import BaseModel

# Authentication

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str | None = None

class User(BaseModel):
    username: str
    email: str | None = None
    full_name: str | None = None
    disabled: bool | None = None

class UserInDB(User):
    hashed_password: str
    pkey_id: int

# Friends

class Friend(BaseModel):
    user_id: int
    last_active: datetime
    display_name: str
    avatar_filepath: str

class FriendsList(BaseModel):
    friends: List[Friend]