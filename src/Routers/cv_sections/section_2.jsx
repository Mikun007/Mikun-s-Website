import Sec_1_cv_sec_2 from "./sction_2_sections/cv_sec_1";
import Sec_2_cv_sec_2 from "./sction_2_sections/cv_sec_2";
import Sec_3_cv_sec_2 from "./sction_2_sections/cv_sec_3";
import Sec_4_cv_sec_2 from "./sction_2_sections/cv_sec_4";

function Cv_section_2() {
    return (
        <div id="second_section_cv">
            <hr />
            <Sec_1_cv_sec_2 />
            <hr />
            <Sec_2_cv_sec_2 />
            <hr className="cv_section_3"/>
            <Sec_3_cv_sec_2 />
            <hr />
            <Sec_4_cv_sec_2 />
        </div>
    );
};

export default Cv_section_2;
