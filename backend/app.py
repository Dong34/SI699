from flask import Flask, request, jsonify, session
import datetime
from predict import predict_label
import sys

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
app.secret_key = 'si699'

OutputInfo = {
    "name": "geek",
    "age": "22",
    "date": x,
    "programming": "python",
}

# Route for seeing a data
@app.route("/data")
def get_time():
    # Returning an api for showing in  reactjs
    # test_label = predict_label('https://github.com/Dong34/SI699/edit/main/backend/app.py')
    return {
        "Name": OutputInfo["name"], 
        "Age": OutputInfo["age"],
        "Date": OutputInfo["date"], 
        "programming": OutputInfo["programming"],
        "url": session.get("url")
        }

# Route for receiving input from user
@app.route("/submit-form", methods=['POST'])
def get_urls():
    data = request.get_json()
    print(data, file=sys.stderr)
    print(data["url"], file=sys.stderr)
    url = data["url"]
    session["url"] = url
    return jsonify({'url': url})

# Running app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
