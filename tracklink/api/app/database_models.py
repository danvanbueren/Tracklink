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
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)

    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

    display_name = Column(String, unique=True, index=True)

class FileMetadataTable(Base):
    __tablename__ = "file_metadata"
    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String, index=True, nullable=False)
    filepath = Column(String, nullable=False)
    uploaded_at = Column(DateTime, default=datetime.now(timezone.utc))