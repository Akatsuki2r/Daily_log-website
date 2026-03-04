from sqlalchemy.engine import URL
from dotenv import load_dotenv, find_dotenv
import os 

load_dotenv()

usrname = os.getenv("DB_USERNAME")
pswd = os.getenv("DB_PASSWORD")

url_object = URL.create(
    "postgresql",
    username=usrname,
    password=pswd,
    host="localhost",
    port=5432,
    database="Daily_log"
)