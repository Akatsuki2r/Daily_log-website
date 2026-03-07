from pydantic import BaseModel, ConfigDict, EmailStr, Field






class Users(BaseModel):
    username: str = Field(min_length=2, max_length=50)
    email: str = Field(max_length=130)
    password: str = Field(min_length=4, max_length=120)
    
class UserLogin(BaseModel):
    username: str = Field(min_length=2, max_length=50)
    password: str = Field(min_length=4, max_length=130)
    

    
class Token(BaseModel):
    acces_token: str
    token_type: str
    
class TokenData(BaseModel):
    email: str | None = None
    
    
    
    
    
    
    
    
    
    
    
    
    
