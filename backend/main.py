from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from smtplib import SMTP
import os

app = Flask(__name__)
CORS(app)

EMAIL = os.environ["email"]
PASSWORD = os.environ["password"]  # Remember Your App Password in Email


projects_1 = [
    {
        "id": 1,
        "header": "My Website",
        "class_name": "big",
        "image_path": "static/images/image2.png",
        "intro": "Making website can be really fascinating and exciting",
        "main": "<div class='details'> "
                "<div>"
                "<p style='text-align: justify'>"
                "<span class='h3'>F</span>irst of all this how I start building this Website but before that there is "
                "a lot of inspiration "
                "and lot of searching in the internet so that I could start building really I couldn't event start "
                "before I built this website I was building another one without thinking of any consequences "
                "when I start building that - 'I was like why this is so hard to build in tutorial I was doing good 🥲🥲'"
                " but eventually I have learn that there is lot more work before start building the website."
                "</p>"
                "<div class='wire-frame'></div>"
                "<div class='examine-img'></div>"
                "<div class='pages-img'></div>"
                "<p style='margin-top: 1rem'><b>Note:-</b> You may be seeing Sign-in and all page but eventually i "
                "removed it.</p>"
                "</div>"
                "<div style='margin-top: 2rem'>"
                "<span class='h4'>NavBar:-</span>"
                "<p style='text-align: justify'> I did the NavBar first because i thought it is the most"
                " difficult part of the"
                " this website, but it finished quickly than i thought. I got the inspiration of this from an mobile "
                "ad, and I thought that this will be the good NavBar for both mobile and desktop/laptop "
                "users. So this is the reason why choose this design."
                "</p>"
                "</div>"
                "<div>"
                "<span class='h4'>Typing Speed Test:-</span>"
                "<p style='text-align: justify'>I haven't thought of this before but this was the most "
                "challenging part of this website took me around 3-4 days to complete it. You can see my code "
                "<a href='#'>here</a>. The design inspiration of this came from a site called <b>liveChat.com</b>. It "
                "was minimalistic straight to the point. So that's why i choose that design pattern. The wavy in the "
                "home page design also came from that site.</p>"
                "</div>"
                "<div style='margin-top: 2rem'>"
                "<p>And the Last is about the project page that design inspiration have came to me from "
                "<b>dribble.com</b>. So that's all, ofCourse there is more but not that important. the 'mark-meter'"
                " is a svg, the 'skill-meter' that you are seeing that i have got from the bootstrap.</p>"
                "</div>"
                "</div>"
    },
    {
        "id": 2,
        "header": "Dummy",
        "class_name": "small",
        "image_path": "static/images/image1.png",
        "intro": "This is a dummy part will not show anything",
        "main": "<h1>None</h1>"
    },
    {
        "id": 3,
        "header": "Dummy",
        "class_name": "big",
        "image_path": "static/images/image1.png",
        "intro": "This is a dummy part will not show anything",
        "main": "<h1>None</h1>"
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


@app.route("/details/<id_>")
@cross_origin()
def details(id_):
    id__ = int(id_)
    for p in projects_1:
        if id__ == p["id"]:
            return p


@app.route("/bug", methods=["POST"])
@cross_origin()
def bug():
    if request.method == "POST":
        the_bug = request.get_json()
        with SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(
                user=EMAIL,
                password=PASSWORD
            )
            connection.sendmail(
                from_addr=EMAIL,
                to_addrs=EMAIL,
                msg=f"subject: Bug Report \n\n {the_bug['uName']}\n\n{the_bug['problem']}"
            )
    return ["None", "None"]


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
