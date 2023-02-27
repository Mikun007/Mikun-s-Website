from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

projects_1 = [
    {
        "id": 1,
        "header": "My Website",
        "class_name": "big",
        "image_path": "static/images/image2.png",
        "intro": "Making website can be really fascinating and exciting"
    },
    {
        "id": 2,
        "header": "Dummy",
        "class_name": "small",
        "image_path": "static/images/image1.png",
        "intro": "This is a dummy part will not show anything"
    },
    {
        "id": 3,
        "header": "Dummy",
        "class_name": "big",
        "image_path": "static/images/image1.png",
        "intro": "This is a dummy part will not show anything"
    }
]


@app.route("/projects")
@cross_origin()
def projects():
    response_data = []
    for project in projects_1:
        image_path = project["image_path"]
        image_url = f"{request.url_root}{image_path}"
        response_data.append({
            "id": project["id"],
            "header": project["header"],
            "class_name": project["class_name"],
            "image": image_url,
            "intro": project["intro"]
        })
    return jsonify(response_data)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
