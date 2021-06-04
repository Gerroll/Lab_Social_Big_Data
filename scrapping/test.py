import requests

url = "https://ali-express1.p.rapidapi.com/product/4001084094868/feedback/"

querystring = {"country":"us","page":"1","type":"all"}

headers = {
    'x-rapidapi-key': "a904b3157fmsh2e2e8ac612a46cbp1b7db2jsn36200df8f7e1",
    'x-rapidapi-host': "ali-express1.p.rapidapi.com"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)