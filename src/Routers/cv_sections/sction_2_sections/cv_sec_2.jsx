import Meter from "../../../components/meter";

function Sec_2_cv_sec_2() {

    return(
        <div className="meters_div">
            
           <div className="mark_shown_area">
                <div>
                    <Meter
                        color= "#754DFF"
                        class_name= "meter_1"
                    />
                    <div>
                        <p id="10th_mark">0</p>
                        <p>%</p>
                    </div>
                    <p className="where">10th</p>
                </div>
                <div>
                    <Meter 
                        color="#FDEC4B"
                        class_name= "meter_2" 
                    />
                    <div>
                        <p id="12th_mark">0</p>
                        <p>%</p>
                    </div>
                    <p className="where">12th</p>
                </div>
                <div>
                    <Meter 
                        color="#443E5B"
                        class_name= "meter_3"
                    />
                    <div>
                        <p id="collage_mark">0</p>
                        <p>%</p>
                    </div>
                    <p className="where">collage</p>
                </div>
           </div>
        </div>
    );
};

export default Sec_2_cv_sec_2;
