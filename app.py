from flask import Flask
from flask import request
from recommendation import recommendation

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/getUserRecommendation", methods=['GET'])
def get_user_recommendation():
    return recommendation.get_user_recommendation(request)
