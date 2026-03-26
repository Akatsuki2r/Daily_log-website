urls = 'http://127.0.0.1:8001/authentication/SignUp'

async def Jasar(url):
    response = await url
    return await response
    


print(Jasar(urls))
print('hello there')