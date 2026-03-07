#This is where all our code about different notes platforms is gonna be 

from joppy.client_api import ClientApi



jopl_api = ClientApi(token="4024269347bc98beda7fc39768e4d276394a07d61773a84bc51540d0bff8f83d993c684bbc45406b12b683abcff3ca2374a76950f480b8beeababb2d88a741ef")


notes = jopl_api.get_all_notes(fields="title,id,parent_id,body")


for note in notes:
    print(note)