import { Link } from "react-router-dom";

function Section_4() {
    return(
        <section id="fourth_section_home">
            <div>
                <Link to="/movies">Favorite Movies</Link>
            </div>
            <div>
                <Link to="/games">Favorite Games</Link>
            </div>
        </section>
    )
};

export default Section_4;
