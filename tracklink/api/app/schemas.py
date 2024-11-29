# app/schemas.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Base definitions for API requests and responses."""

from pydantic import BaseModel

class CreateUserRequest(BaseModel):
    username: str
    email: str
    password: str

class CreateUserResponse(BaseModel):
    actionSuccess: bool
    uuid: str

class ReadUserRequest(BaseModel):
    uuid: str

class ReadUserResponse(BaseModel):
    uuid: str
    username: str
    email: str

class UpdateUserRequest(BaseModel):
    username: str
    email: str
    password: str

class DeleteUserRequest(BaseModel):
    username: str
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class UserResponse(BaseModel):
    username: str
    email: str | None = None

class UserInDB(UserResponse):
    hashed_password: str