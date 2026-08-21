import requests

url = "http://127.0.0.1:5000/api/predict/manual"

data = {
    "Is_CH": 1,
    "ADV_S": 1,
    "Expaned Energy": 2.46,
    "Data_Sent_To_BS": 1200,
    "SCH_S": 0
}

response = requests.post(url, json=data)

print(response.json())