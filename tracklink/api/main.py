# main.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""API entrypoint and initialization."""

# TODO: When deploying production build, remove localhost from origins array

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine
from app.models import Base
from app.routes import user, testFileUpDown

app = FastAPI()

Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost:3000",
    "https://tracklink.app",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return 'Running'

app.include_router(user.router, prefix="/user")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
