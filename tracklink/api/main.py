# main.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""API entrypoint and initialization."""

# TODO: When deploying production build, remove localhost from origins array

import uvicorn
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.config_database import engine, get_db
from app.database_models import Base
from app.routes import user, authentication, friends, tracks

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
async def api_status(db: Session = Depends(get_db)):
    try:
        postgres_status = db.is_active
    except:
        postgres_status = False

    if postgres_status:
        postgres_status = 'running'
    else:
        postgres_status = 'stopped'

    return {
        'api_status': {
            'uvicorn': 'running',
            'fastapi': 'running',
            'db_post': postgres_status,
        }
    }

app.include_router(user.router, prefix="/user")
app.include_router(authentication.router, prefix="/auth")
app.include_router(friends.router, prefix="/friend")
app.include_router(tracks.router, prefix="/track")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)