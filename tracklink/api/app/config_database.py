# app/config_database.py
# Copyright © 2024 Daniel Van Bueren. All rights reserved.
#
# This software is part of Tracklink and is protected by its license:
# https://github.com/danvanbueren/Tracklink/blob/main/LICENSE

"""Configuration for database."""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

USERNAME = 'username'
PASSWORD = 'password'
HOST = 'database'
PORT = 5432
DATABASE = 'tracklink'
URL = f'postgresql://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}'

engine = create_engine(URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)