from argon2 import PasswordHasher
from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials


ph = PasswordHasher()


def passworrd_hashing(plain_password):
    hashed = ph.hash(plain_password)
    return hashed


def  verify_password(plain_password, hashed_password):#! Not in use the verification is done directly inside the Login request
    return ph.verify(plain_password, hashed_password)    



