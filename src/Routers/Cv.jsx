import Cv_section_1 from "./cv_sections/section_1";
import Cv_section_2 from "./cv_sections/section_2";
import { ReactSVG } from "react-svg";
import path from "../svg/path.svg";
import { motion } from "framer-motion";

function Cv() {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        id="grid-container-cv">
            <ReactSVG className="path" src={path} />
            <Cv_section_1 />
            <Cv_section_2 />
        </motion.div>
    )
}

export default Cv;