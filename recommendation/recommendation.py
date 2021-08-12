from recommendation.Catalogue import Catalogue


def init_recommendation():
    """ Init Catalogue for offline purpose """
    Catalogue()


def get_user_recommendation(request):
    """ Get user recommendation based on the score of item in his interets """

    body = request.get_json(force=True)
    send_error_text = get_body_error_recommendation(body)
    if send_error_text != None :
        return send_error_text

    catalogue = Catalogue()
    default_catgory = "Musique, CD, Vinyles"
    recomendations_list = catalogue.get_best_products_in_category(category_name=default_catgory, n_product_to_return=3)

    return recomendations_list[["title", "fnacUrl", "descSub", "price", "imgLink", "review", "reviewNumber"]].to_json(orient="records")


def get_body_error_recommendation(body):
    """ Check if body has all parametter needed
        else return a Json error message"""

    if "interet" not in body :
        return set_json_error_msg("Missing 'interet' field in body")
    if not isinstance(body["interet"], list):
        return set_json_error_msg("Field 'interet' insn't a list")
    return None


def set_json_error_msg(message):
    """ Default Json error message """

    return {
        "error_message": message
    }