from fastapi import APIRouter, File, UploadFile, HTTPException, Query
from fastapi.responses import FileResponse
import os
import shutil

from app.database import SessionLocal
from app.fileserver import UPLOAD_DIRECTORY
from app.models import FileMeta

router = APIRouter()

@router.post("/create/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
    try:
        with open(file_path, "wb") as f:
            shutil.copyfileobj(file.file, f)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save file: {str(e)}")

    # Save metadata to database
    db = SessionLocal()
    file_meta = FileMeta(filename=file.filename, filepath=file_path)
    db.add(file_meta)
    db.commit()
    db.refresh(file_meta)
    db.close()

    return {"id": file_meta.id, "filename": file_meta.filename}


@router.get("/read/")
def list_files(skip: int = Query(0, ge=0), limit: int = Query(10, ge=1)):
    """
    List all files with optional pagination.
    - `skip`: Number of files to skip.
    - `limit`: Maximum number of files to return.
    """
    db = SessionLocal()
    files = db.query(FileMeta).offset(skip).limit(limit).all()
    db.close()

    if not files:
        raise HTTPException(status_code=404, detail="No files found")

    return [{"id": file.id, "filename": file.filename, "uploaded_at": file.uploaded_at} for file in files]


@router.get("/read/{file_id}")
def download_files(file_id: int):
    db = SessionLocal()
    file_meta = db.query(FileMeta).filter(FileMeta.id == file_id).first()
    db.close()
    if not file_meta:
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(path=file_meta.filepath, filename=file_meta.filename)

@router.delete("/delete/{file_id}")
def delete_file(file_id: int):
    db = SessionLocal()
    file_meta = db.query(FileMeta).filter(FileMeta.id == file_id).first()

    if not file_meta:
        db.close()
        raise HTTPException(status_code=404, detail="File not found")

    # Remove the file from the file system
    try:
        os.remove(file_meta.filepath)
    except FileNotFoundError:
        db.close()
        raise HTTPException(status_code=404, detail="File not found on disk")
    except Exception as e:
        db.close()
        raise HTTPException(status_code=500, detail=f"Failed to delete file: {str(e)}")

    # Remove metadata from the database
    db.delete(file_meta)
    db.commit()
    db.close()

    return {"message": "File deleted successfully", "file_id": file_id}
