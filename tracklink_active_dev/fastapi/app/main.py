from fastapi import FastAPI, UploadFile, File
import os

app = FastAPI()

MEDIA_ROOT = os.getenv("MEDIA_ROOT", "./media")

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(MEDIA_ROOT, file.filename)
    with open(file_path, "wb") as f:
        f.write(await file.read())
    return {"filename": file.filename}

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}
