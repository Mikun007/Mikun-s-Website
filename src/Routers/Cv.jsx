import Cv_section_1 from "./cv_sections/section_1";
import Cv_section_2 from "./cv_sections/section_2";

function Cv() {
    return (
        <div id="grid-container-cv">
            <Cv_section_1 />
            <Cv_section_2 />
        </div>
    )
}

export default Cv;