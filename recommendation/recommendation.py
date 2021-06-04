
def init_recommendation():
    print("init Recommendation")

def get_user_recommendation(request):
    body = request.get_json(force=True)
    invalid_text = get_error_recommendation_body(body)
    if invalid_text != None :
        return invalid_text

    return {
        "items": [
            {
                "category": "Livres, BD, Ebooks, Papeterie",
                "title": "120 activités et jeux pour les 0-6 ans",
                "fnacUrl": "https://livre.fnac.com/a11094446/Evelyne-Allegre-120-activites-et-jeux-pour-les-0-6-ans#int=:NonApplicable|NonApplicable|NonApplicable|11094446|NonApplicable|NonApplicable  ",
                "descSub": "Evelyne Allègre (Auteur), Jacqueline Gassier (Auteur) 5 ( 1 )",
                "price": "19.9",
                "imgLink": "https://static.fnac-static.com/multimedia/Images/FR/NR/cb/2f…tsp20171127120429/105-activites-et-jeux-pour-les-0-6-ans.jpg  ",
                "review": "5/5",
                "reviewNumber": "1",
            },
            {
                "category": "Enfants, Jouets, Bébés",
                "title": "Figurine Funko Pop Games Pokemon S1 Pikachu",
                "fnacUrl": "https://www.fnac.com/Figurine-Funko-Pop-Games-Pokemon-S1-Pikachu/a14935512/w-4",
                "descSub": "Petite figurine - Funko fnac+ 5 ( 43 )",
                "price": "14.99",
                "imgLink": "https://static.fnac-static.com/multimedia/Images/FR/MDM/35/a…210125130155/Figurine-Funko-Pop-Games-Pokemon-S1-Pikachu.jpg",
                "review": "5/5",
                "reviewNumber": "43",
            }
        ]
    }

def get_error_recommendation_body(body):
    if "age" not in body:
        return set_json_error_msg("Missing 'age' field in body")
    return None

def set_json_error_msg(message):
    return {
        "error_message": message
    }