import { ReactSVG } from "react-svg";
import profile from "../svg/profile.svg";
import profilePic from "../svg/profilepic.svg";
import curv from "../svg/curv.svg";

function Home() {
    return (
        <div>
            <div className="flex-container-home">
                <main className="grid-container-home">

                    <section id="first_section_home">
                        <div>
                            <div>
                                <h1>Hello,</h1>
                                <h1>Welcome to my </h1>
                                <h1>Website...</h1>
                            </div>
                            <div>
                                <button><b>Contact Me</b></button>
                                <a href="#">Projects  <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>

                        <div className="profile">
                            <div id="rotate_element">
                                <ReactSVG src={profile} />
                            </div>
                            <div>
                                <ReactSVG src={profilePic} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <ReactSVG src={curv} />
                    </section>

                    <section>section2</section>
                    <section>section3</section>
                    <section>section4</section>
                </main>
                <footer>Footer</footer>
            </div>

            <div className="fixed-navbar-position-home">
                <nav>
                    <p>BD.</p>
                    <p>Home</p>
                    <p>CV</p>
                    <p>About</p>
                </nav>
            </div>

        </div>
    );
};

export default Home;
