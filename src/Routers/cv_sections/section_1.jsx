import { ReactSVG } from "react-svg";
import profilePic from "../../svg/profilepic.svg";
function Cv_section_1() {
    function handleDownload() {
        fetch('Budhadev_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Budhadev_Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <section id="first_section_cv">
            <span style={{"margin": "5px"}}>
                <ReactSVG src={profilePic} />
            </span>
            <p className="greeting_cv_1">Hii,</p>
            <p className="greeting_cv_2">I am Budhadev Das</p>
            <p className="greeting_cv_3">mikundas27@gmail.com</p>
            <p className="greeting_cv_3">
                Rayagada, Odisha <br />
            </p>
            <button
            onClick={handleDownload}
            className="greeting_cv_4 btn btn-outline-warning" style={{"margin": "20px", "opacity": "0"}}>Download</button>
        </section>
    );
};

export default Cv_section_1;
