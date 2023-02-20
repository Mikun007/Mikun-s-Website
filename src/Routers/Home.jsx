import { ReactSVG } from "react-svg";
import curv from "../svg/curv.svg";
import Section_1 from "./home_sections/section_1";
import Section_2 from "./home_sections/section_2";
import Section_3 from "./home_sections/section_3";
import Section_4 from "./home_sections/section_4";

function Home() {
    return (
        <div>

            <div>
                <main className="grid-container-home">

                    <Section_1 />

                    <section>
                        <ReactSVG src={curv} />
                    </section>

                    <Section_2 />
                    <Section_3 />
                    <Section_4 />
                </main>
            </div>

        </div>
    );
};

export default Home;
