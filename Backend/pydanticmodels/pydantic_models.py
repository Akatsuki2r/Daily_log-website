from pydantic import BaseModel






class Users(BaseModel):
    username: str
    email: str
    hashed_password: str
    
class UserLogin(BaseModel):
    email: str
    password: str
    
    
    
class Token(BaseModel):
    acces_token: str
    token_type: str
    
    
    
    
    
    
    
    
    
    
    
    
    
    
