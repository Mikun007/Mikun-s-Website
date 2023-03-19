from flask import Flask, jsonify, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from smtplib import SMTP_SSL
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__, static_folder="../build", static_url_path="")
CORS(app)

EMAIL = os.environ["email"]
PASSWORD = os.environ["password"]  # Remember Your App Password in Email

projects_1 = [
    {
        "id": 0,
        "header": "My Website",
        "class_name": "big",
        "image_path": "static/images/image_2.png",
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
                "<a href='https://github.com/Mikun007/Mikun-s-Website.git' target='__blank'>here</a>. The design inspiration of this "
                "came from a site called <b>liveChat.com</b>. It"
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
        "id": 1,
        "header": "To-do-list",
        "class_name": "small",
        "image_path": "static/images/to-do-list.png",
        "intro": "See my To-do-list may not look good 🥲. but I asure you the functionality.",
        "main": '<div class="details" style="padding: 100px; background-color: #ffeb3b;">'
                '<h1 class="display-4" style="text-align: center;">To-do-list</h1>'
                '<div class="input-group mb-3">'
                '<input id="new_list_todo" type="text" class="form-control" style="text-align: center;" '
                'autocomplete="off">'
                '<button type="submit" onclick="add_new_item()" class="btn btn-dark">Add</button>'
                '</div>'
                '<div>'
                '<ul class="ul list-group">'
                '</ul>'
                '</div>'
                '</div>'
                '<script>'
                'var list = ["None", "None"];'
                'var ul = document.querySelector(".ul");'
                'var the_inp = document.getElementById("new_list_todo");'
                'the_inp.focus();'
                'function add_new_item() {'
                'list.push(the_inp.value);the_inp.value = "";'
                'ul.innerHTML = "";'
                'items_list()'
                '}'
                'function items_list() {'
                'for (var i = 0; i < list.length; i++) {'
                'var listItem = document.createElement("li");'
                'var listText = document.createTextNode(list[i]);'
                'listItem.classList.add("list-group-item");'
                'listItem.style.display = "flex";'
                'listItem.style.justifyContent = "space-between";'
                'listItem.style.alignItems = "center";'
                'listItem.appendChild(listText);'
                'var button = document.createElement("button");'
                'button.classList.add("btn");'
                'button.classList.add("btn-outline-danger");'
                'var buttonText = document.createTextNode("X");'
                'button.appendChild(buttonText);'
                'button.addEventListener("click", function() {'
                'var item = this.parentNode;'
                'var itemIndex = Array.from('
                'this.parentNode.parentNode.children).indexOf(this.parentNode);'
                'item.remove();'
                'list.splice(itemIndex, 1)});'
                'listItem.appendChild(button);'
                'ul.appendChild(listItem);};};items_list();</script>'
    },
    {
        "id": 2,
        "header": "Side_Bar and FAQ",
        "class_name": "big",
        "image_path": "static/images/sideBar-FAQ.png",
        "intro": "my side bar and faq project",
        "main": '<div class="whileNavShown" style="z-index: 1; position: absolute; height: 100%; width: 100%; '
                'background-color: lightgoldenrodyellow; opacity: 30%; display: none;"></div><nav class="sideNav-faq" '
                'style="position: absolute;border: 1px solid black;z-index: 2;padding: 0rem 4rem;width: 200px;height: '
                '100%;background-color: black;color: white;left: -50px;display: none;"><button class="btn '
                'btn-outline-light" onclick="reverseDisplayNav()" style="position: absolute; right: '
                '1px;">X</button><div style="margin: 4rem 0rem 2rem '
                '0rem;"><h1>BD.</h1></div><p>Home</p><p>Cv</p><p>About</p></nav><button onclick="displayNav()" '
                'class="navShowBtn btn btn-outline-dark"><i class="navShowBtn fa-solid fa-bars"></i></button><div '
                'class="faq-page"><h1 style="margin: 2rem 0rem;">FAQ.</h1><div class="faq"><h5 class="faq-heading '
                'meaning-of-life" onclick="faqShown(event)">What is the meaning of life?</h5><p '
                'class="meaning-of-life-detail">The meaning of life is a highly subjective and personal concept, '
                'and people often have different ideas about what it means and how to achieve it. Some people believe '
                'that the meaning of life is to achieve happiness, while others believe that it is to fulfill a '
                'specific purpose or destiny. Ultimately, the meaning of life is a question that each individual must '
                'answer for themselves.</p></div><hr><div class="faq"><h5 class="faq-heading ajax" onclick="faqShown('
                'event)">What is AJAX in JavaScript? </h5><p class="ajax-detail">AJAX (Asynchronous JavaScript and '
                'XML) is a technique for creating dynamic web pages that update without requiring a full page '
                'refresh. AJAX allows JavaScript to communicate with a server in the background and update parts of '
                'the page based on the servers response.</p></div><hr><div class="faq"><h5 class="faq-heading '
                'callback-function" onclick="faqShown(event)">What is a callback function in JavaScript? </h5><p '
                'class="callback-function-detail">A callback function is a function that is passed as an argument to '
                'another function and is executed after some event or task is completed. Callbacks are commonly used '
                'in JavaScript for asynchronous programming, where one function needs to wait for another function to '
                'complete before continuing.</p></div><hr></div><script>var sideNav = document.querySelector('
                '".sideNav-faq");var currentFaq = [];window.addEventListener("click", function(event) {if('
                'event.target.classList[0] == "navShowBtn") {return;};sideNav.style.display = '
                '"none";document.querySelector(".whileNavShown").style.display = "none";});function faqShown(event) {'
                'let theTarget = event.target.classList[1];let details = document.querySelector("." + theTarget + '
                '"-detail");if (!currentFaq.includes(details)) {details.style.display = "none";currentFaq.push('
                'details);};if (details.style.display == "none") {details.style.display = '
                '"block";details.classList.add("ani-detail");} else {details.style.display = "none";};};function '
                'displayNav() {sideNav.style.display = "block";sideNav.classList.add('
                '"sideNav-faq-ani");document.querySelector(".whileNavShown").style.display = "block";};function '
                'reverseDisplayNav() {sideNav.style.display = "none";document.querySelector('
                '".whileNavShown").style.display = "none";};</script>'
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
    return projects_1[id__]


@app.route("/bug", methods=["POST"])
@cross_origin()
def bug():
    if request.method == "POST":
        the_bug = request.get_json()
        message = MIMEMultipart()
        message["From"] = EMAIL
        message["To"] = EMAIL
        message["subject"] = "Bug Report"

        body = f"{the_bug['uName']}\n\n{the_bug['problem']}"
        message.attach(MIMEText(body, 'plain'))
        with SMTP_SSL("smtp.gmail.com", 465) as connection:
            connection.login(EMAIL, PASSWORD)
            connection.sendmail(EMAIL, EMAIL, message.as_string())
    return ["None", "None"]


@app.route("/movies")
@cross_origin()
def movies():
    return movies_


@app.route("/games")
@cross_origin()
def games():
    return games_


@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
