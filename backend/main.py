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
                "challenging part of this website took me around 2 days to complete it. You can see my code "
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

movies_ = [
    {
        "id": 0,
        "name": "Demon Slayer: Mugen Train",
        "image": "https://m.media-amazon.com/images/M"
                 "/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
        "rating": "10/10",
        "description": "The Best Visual effect The Best story line, Action, Emotion, comedy everything you can "
                       "experience here. The Best Movie and the Best Series of all time"
    },
    {
        "id": 1,
        "name": "A Silent Voice",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJrlYXvqlm1bAFMMfjhlX970K4B0z2AJv66KKb1Y9gW"
                 "-4eml2X",
        "rating": "10/10",
        "description": "Best Emotional slice of life Movie You could watch This Movie shows us how people can change "
                       "and what childhood trauma can do. Can't explain it fully just watch it, you will not regret it."
    },
    {
        "id": 2,
        "name": "Violet Evergarden",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRy_hqsyQpaeMArLEZkfB"
                 "-NoWPbGGlkNtjg9TyhA2Cm9tb7d8xL",
        "rating": "10/10",
        "description": "Best Emotional Drama and Fantasy Movie You could watch shows us after war disaster and a love "
                       "story. Before watching this Movie I would recommend to watch the episodes of this series."
    },
    {
        "id": 3,
        "name": "Wolf Children",
        "image": "https://upload.wikimedia.org/wikipedia/en/9/9c/%C5%8Ckami_Kodomo_no_Ame_to_Yuki_poster.jpg",
        "rating": "10/10",
        "description": "How far a Mother can go for her children's without having their father"
    },
    {
        "id": 4,
        "name": "Harry Potter",
        "image": "https://m.media-amazon.com/images/M"
                 "/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_"
                 ".jpg",
        "rating": "9/10",
        "description": "The Most Popular Harry Potter Series I love not only first first part but all part of the "
                       "series. Really bring back the childhood fantasy dream that I was always dreaming of. I am "
                       "regretting not watching in my childhood"
    },
    {
        "id": 5,
        "name": "3 Idiots",
        "image": "https://m.media-amazon.com/images/M"
                 "/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "rating": "9/10",
        "description": "The fun, the excitement, the pressure and the thing you should pursue in life than the thing "
                       "that you were told. Beautifully described in this movie."
    },
    {
        "id": 6,
        "name": "Jujutsu Kaisen 0",
        "image": "https://cdn.myanimelist.net/images/about_me/ranking_items/10649240-6dfdfcb5-cd75-4b4b-9f3d"
                 "-08416eb67811.jpg?t=1664341141",
        "rating": "10/10",
        "description": "The top action anime movie recently"
    },
    {
        "id": 7,
        "name": "Hotarubi no Mori e",
        "image": "https://cdn.myanimelist.net/images/anime/1599/112267l.jpg",
        "rating": "8/10",
        "description": "A Tail about a spirit and a girl. A small love story."
    },
    {
        "id": 8,
        "name": "Ready Player One",
        "image": "https://m.media-amazon.com/images/I/91UjyAWXgpL._RI_.jpg",
        "rating": "8/10",
        "description": "If You want to see the future in a different manner see this"
    },
    {
        "id": 9,
        "name": "Sherlock Holmes",
        "image": "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_.jpg",
        "rating": "8/10",
        "description": "All the part of the sherlock homes. I love it."
    },
    {
        "id": 10,
        "name": "A Whisker Away",
        "image": "https://m.media-amazon.com/images/M"
                 "/MV5BNDI5ODBhYzMtNDc4Yi00NjEwLWJiZWUtMGE2Mzc4MGVjN2E0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "rating": "7/10",
        "description": "An Adventure Love Story"
    },
]

games_ = [
    {
        "id": 0,
        "name": "Apex Legends",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg",
        "rating": "10/10",
        "description": "The best Battle ground game. The uniqueness about this games is that you can choose "
                       "different legend to play and each legend have an unique skills set."
    },
    {
        "id": 1,
        "name": "Browlhalla",
        "image": "https://static-cdn.jtvnw.net/ttv-boxart/460316_IGDB-272x380.jpg",
        "rating": "10/10",
        "description": "This is like a Battle ground game in 2D. I like it because it has a very low learning curve."
    },
    {
        "id": 2,
        "name": "Forza Horizon 4",
        "image": "https://store-images.s-microsoft.com/image/apps.36093.14343301090572358.2000000000007864116"
                 ".1feb0fed-abe9-4849-b638-8d7eca69cff4?w=180&h=300&q=90&mode=scale&format=jpg",
        "rating": "10/10",
        "description": "The best open world racing game. I love it because it has a vast and beautiful scenery and "
                       "the car verity"
    },
    {
        "id": 3,
        "name": "Ori And The Will Of The Wisps",
        "image": "https://upload.wikimedia.org/wikipedia/en/9/94/Ori_and_the_Will_of_the_Wisps.jpg",
        "rating": "10/10",
        "description": "An Indie game with beautiful arts and scene and good story line"
    },
    {
        "id": 4,
        "name": "Grand Theft Auto V",
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        "rating": "10/10",
        "description": "The best open world game where you can do almost everything. Love it"
    },
    {
        "id": 5,
        "name": "Arkham Knight",
        "image": "https://upload.wikimedia.org/wikipedia/en/6/6c/Batman_Arkham_Knight_Cover_Art.jpg",
        "rating": "8/10",
        "description": "If you love batman you should definitely try this. The only thing is its not an open world."
    },
    {
        "id": 6,
        "name": "Tekken 7",
        "image": "https://m.media-amazon.com/images/M"
                 "/MV5BNWM4MjE1YTItMDFjOC00MDBiLWE2ZGYtNTU2Y2IwYzhhOGJjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_"
                 ".jpg",
        "rating": "8/10",
        "description": "Best PVP Game you can play you will love this game. but the only down site is if you play it "
                       "by your self you will loose like 80% fun of this game."
    },
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


@app.route("/movies")
@cross_origin()
def movies():
    return movies_


@app.route("/games")
@cross_origin()
def games():
    return games_


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
