import Cv_section_1 from "./cv_sections/section_1";
import Cv_section_2 from "./cv_sections/section_2";
import { ReactSVG } from "react-svg";
import path from "../svg/path.svg";

function Cv() {
    return (
        <div id="grid-container-cv">
            <ReactSVG className="path" src={path} />
            <Cv_section_1 />
            <Cv_section_2 />
        </div>
    )
}

export default Cv;