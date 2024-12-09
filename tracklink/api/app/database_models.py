# app/database_models.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Base definitions for database tables."""

from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone

Base = declarative_base()

class UsersTable(Base):
    __tablename__ = "users_table"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True) #Int
    email = Column(String, unique=True, index=True) #String
    password_hash = Column(String) #String
    display_name = Column(String, unique=True, index=True) #String
    default_privacy_type = Column(String, index=True) #String: private, public, friends, friends_of_friends
    last_active = Column(DateTime, default=datetime.now(timezone.utc)) #DateTime

class TracksTable(Base):
    __tablename__ = "tracks_table"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True) #Int
    fkey_owner = Column(Integer, index=True, nullable=False) #Int
    track_name = Column(String, index=True, nullable=False) #String
    privacy_type = Column(String, index=True, nullable=False) #String: private, public, friends, friends_of_friends

class FileMetadataTable(Base):
    __tablename__ = "file_metadata"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True) #Int

    filename = Column(String, index=True, nullable=False)
    filepath = Column(String, nullable=False)
    uploaded_at = Column(DateTime, default=datetime.now(timezone.utc))