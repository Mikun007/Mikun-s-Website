import { ReactSVG } from "react-svg";
import Figma from "../../../svg/figma.svg";
import Javascript from "../../../svg/javascript.svg";
import Python from "../../../svg/python.svg";
import React from "../../../svg/react.svg";
import Next from "../../../svg/next.svg";
import Sass from "../../../svg/sass.svg";
import Ai from "../../../svg/Ai.svg";

function Sec_3_cv_sec_2() {
    return(
        <div className="my_skills">
            <div>
                <ReactSVG src={Javascript}/>
                <div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="the_bar_for_javascript progress-bar progress-bar-striped progress-bar-animated" style={{"width": "0%", "backgroundColor": "#F0DB4F"}}></div>
                    </div>
                </div>
            </div>
            <div>
                <ReactSVG src={Python}/>
                <div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="the_bar_for_python progress-bar progress-bar-striped progress-bar-animated" style={{"width": "0%", "backgroundColor": "#387EB8"}}></div>
                    </div>
                </div>
            </div>
            <div>
                <ReactSVG src={React}/>
                <div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="the_bar_for_react progress-bar progress-bar-striped progress-bar-animated" style={{"width": "0%", "backgroundColor": "#00D8FF"}}></div>
                    </div>
                </div>
            </div>
            <div>
                <ReactSVG src={Sass}/>
                <div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="the_bar_for_sass progress-bar progress-bar-striped progress-bar-animated" style={{"width": "0%", "backgroundColor": "#CD6799"}}></div>
                    </div>
                </div>
            </div>
            <div>
                <ReactSVG src={Next}/>
                <div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="the_bar_for_next progress-bar progress-bar-striped progress-bar-animated" style={{"width": "0%", "backgroundColor": "black"}}></div>
                    </div>
                </div>
            </div>
            <div>
                <ReactSVG src={Figma}/>
                <div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="the_bar_for_figma progress-bar progress-bar-striped progress-bar-animated" style={{"width": "0%", "backgroundColor": "#A259FF"}}></div>
                    </div>
                </div>
            </div>
            <div>
                <ReactSVG src={Ai}/>
                <div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="the_bar_for_ai progress-bar progress-bar-striped progress-bar-animated" style={{"width": "0%", "backgroundColor": "#FF9A00"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec_3_cv_sec_2;
