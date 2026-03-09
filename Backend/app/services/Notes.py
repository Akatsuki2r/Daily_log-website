#* This is where all our code about different notes platforms is gonna be 
import json

from joppy.client_api import ClientApi



jopl_api = ClientApi(token="4024269347bc98beda7fc39768e4d276394a07d61773a84bc51540d0bff8f83d993c684bbc45406b12b683abcff3ca2374a76950f480b8beeababb2d88a741ef")


jopl_notes = jopl_api.get_all_notes(fields="title,id,parent_id,body")


def Note_JSON(notes):
    # This keeps only the fields that actually have data
    dict_notes = [{k: v for k, v in n.__dict__.items() if v is not None} for n in notes]
    return print( json.dumps(dict_notes)#gives us the json
)


Note_JSON(jopl_notes)
    
#For more info https://github.com/marph91/joppy?tab=readme-ov-file

