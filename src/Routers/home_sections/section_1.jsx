import { ReactSVG } from "react-svg";
import profile from "../../svg/profile.svg";
import profilePic from "../../svg/profilepic.svg";

function Section_1() {
    
    return(
        <section id="first_section_home">
                <div>
                    <div>
                        <h1>Hello,</h1>
                        <h1>Welcome to my </h1>
                        <h1>Website...</h1>
                    </div>
                    <div>
                        <button onClick={() => {
                            window.location.href = "mailto:mikundas27@gmail.com";
                        }}><b>Hire_Me</b></button>
                        <a href="#">Projects  <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="profile">
                    <div id="rotate_element" className="infinite_rotation">
                        <ReactSVG src={profile} />
                    </div>
                    <div>
                        <ReactSVG src={profilePic} />
                    </div>
                </div>
        </section>
    )
};

export default Section_1;
