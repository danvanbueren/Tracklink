from fastapi import APIRouter

router = APIRouter()

@router.post("/create")
async def create_user():
    return 'create'

@router.get("/read")
async def read_user():
    return 'read'

@router.post("/update")
async def update_user():
    return 'update'

@router.delete("/delete")
async def delete_user():
    return 'delete'