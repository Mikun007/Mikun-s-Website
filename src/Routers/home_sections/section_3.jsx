import { Link } from "react-router-dom";

function Section_3() {
    return(
        <section id="third_section_home">
            <Link>
                <h3>Experience..</h3>
                <p>Making a Website from scrach by your-self is really pain 😁 but at the same time it is really 
                    Fascinating and Exciting. 😍🤩</p>
                <i className="fa-solid fa-angles-right fa-3x"></i>
            </Link>
            <a href="https://www.skillsyouneed.com/rhubarb/benefits-of-typing.html" target="_blank">
                <h3>DO YOU KNOW</h3>
                <p>Typing Speed May not seem intimidating but it really will help you in many aspect of life.... 🧐</p>
                <i className="fa-solid fa-angles-right fa-2x fa-3x"></i>
            </a>
            <a href="https://www.healthline.com/health/cardio-everyday" target="_blank">
                <p>Why Cardio Exercise is Important but with Limitation...🤨</p>
                <i className="fa-solid fa-angles-right fa-3x"></i>
            </a>
        </section>
    );
};

export default Section_3;
