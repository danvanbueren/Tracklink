from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import Session

USERNAME = 'user'
PASSWORD = 'password'
HOST = 'database'
PORT = 5432
DATABASE = 'tracklink'
URL = f'postgresql://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}'

print('Connecting to ' + URL)
engine = create_engine(URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db: Session = SessionLocal()
    try:
        print('yield db')
        yield db
    finally:
        db.close()
        print('close db')