import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

// function to fetch the datas
const getProject = async () => {
    const res = await fetch("/projects");
    return res.json();
};

function Project() {
    const {data, status} = useQuery("Projects", getProject);

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
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
                    to={"/project/detail/" + project.id}
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
                        </div>
                    </Link>)}
                </div>
            )}
        </motion.div>
    );
};

export default Project;
