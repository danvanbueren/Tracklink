from pydantic import BaseModel

# USER

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

#

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