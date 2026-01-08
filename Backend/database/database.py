from sqlalchemy.engine import URL





url_object = URL.create(
    "postgresql",
    username="postgres",
    password="1234",
    host="localhost",
    port=5432,
    database="Daily_log"
)


