from pydantic import BaseModel






class Users(BaseModel):
    username: str
    email: str
    password: str
    
class UserLogin(BaseModel):
    email: str
    password: str
    
class UserName(BaseModel):
    username: str
    
    
class Token(BaseModel):
    acces_token: str
    token_type: str
    
class TokenData(BaseModel):
    email: str | None = None
    
    
    
    
    
    
    
    
    
    
    
    
    
