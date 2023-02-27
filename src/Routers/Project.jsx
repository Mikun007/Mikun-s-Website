import { Link } from "react-router-dom";
import { useQuery } from "react-query";

// function to fetch the datas
const getProject = async () => {
    const res = await fetch("/projects");
    return res.json();
};

function Project() {
    const {data, status} = useQuery("Projects", getProject);

    return (
        <div>
            {status === "loading" && (
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            )}
            {status === "error" && (
                <div style={{"color": "red"}}>Error fetching data</div>
            )}
            {status === "success" && (
                <div id="project_page">
                    {data.map(project => 
                    <Link 
                    key={project.id} 
                    className={project.class_name}
                    style={
                        {
                            "backgroundImage": `url(${project.image})`,
                            "backgroundRepeat": "no-repeat",
                            "backgroundSize": "cover",
                            "backgroundPosition": "center",
                            "backgroundColor": "gray",
                            "backgroundBlendMode": "multiply",
                        }
                    }
                    >
                        <div>
                            <h4>{project.header}</h4>
                            <p>{project.intro}</p>
                            {/* <div dangerouslySetInnerHTML={{__html: project.intro}}></div> */}
                        </div>
                    </Link>)}
                </div>
            )}
        </div>
    );
};

export default Project;
