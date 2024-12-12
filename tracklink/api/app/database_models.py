# app/database_models.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Base definitions for database tables."""

from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone

Base = declarative_base()

# Root Users Table
class UsersTable(Base):
    __tablename__ = "users_table"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True) #Int
    email = Column(String, unique=True, index=True) #String
    password_hash = Column(String) #String
    display_name = Column(String, unique=True, index=True) #String
    last_active = Column(DateTime, default=datetime.now(timezone.utc)) #DateTime
    default_privacy_type = Column(String, index=True)  # String: private, public, friends, friends_of_friends

# Friend Requests Table (Joins to Users Table)
class FriendRequestsTable(Base):
    __tablename__ = "friend_requests_table"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True)  # Int
    fkey_request_owner = Column(Integer, index=True, nullable=False)  # Int
    fkey_request_recipient = Column(Integer, index=True, nullable=False)  # Int
    request_accepted = Column(Boolean, index=True, nullable=False)
    request_sent = Column(DateTime, default=datetime.now(timezone.utc))  # DateTime
    response_recorded = Column(DateTime)  # DateTime

# Access Reset Table (Joins to Users Table)
class AccessResetTable(Base):
    __tablename__ = "access_reset_table"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True)  # Int
    fkey_owner = Column(Integer, index=True, nullable=False)  # Int
    reset_code = Column(String, nullable=False)  # String

# Root Tracks Table
class TracksTable(Base):
    __tablename__ = "tracks_table"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True) #Int
    fkey_owner = Column(Integer, index=True, nullable=False) #Int
    track_name = Column(String, index=True, nullable=False) #String
    privacy_type = Column(String, index=True, nullable=False) #String: private, public, friends, friends_of_friends

# Track Contributors Table (Joins to Tracks Table)
class TrackContributorsTable(Base):
    __tablename__ = "track_contributors_table"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True) #Int
    fkey_track = Column(Integer, index=True, nullable=False)  # Int
    fkey_user = Column(Integer, index=True, nullable=False)  # Int
    permission_type = Column(String, index=True, nullable=False)  # String: admin, contribute, review, read

# Track Content Table (Joins to Tracks Table)
class TrackContentTable(Base):
    __tablename__ = "track_content_table"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True)  # Int
    fkey_track = Column(Integer, index=True, nullable=False)  # Int
    fkey_owner = Column(Integer, index=True, nullable=False)  # Int
    fkey_internal_recursive = Column(Integer, index=True)  # Int
    created = Column(DateTime, default=datetime.now(timezone.utc), nullable=False)  # DateTime
    content_type = Column(String, index=True, nullable=False)  # String: system_comment, user_comment, stem_group, stem_group_part, stem_solo, bounce, cover_art,
    content_filepath = Column(String)  # String
    content_text = Column(String)  # String

class FileMetadataTable(Base):
    __tablename__ = "file_metadata"
    pkey_id = Column(Integer, primary_key=True, index=True, autoincrement=True) #Int
    filename = Column(String, index=True, nullable=False)
    filepath = Column(String, nullable=False)
    uploaded_at = Column(DateTime, default=datetime.now(timezone.utc))