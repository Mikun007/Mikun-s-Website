import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import InnerHTML from 'dangerously-set-html-content';

function ProjectE() {
    const { id } = useParams();
    
    async function getDetails() {
        const res = await fetch("/details/" + id);
        return res.json();
    }

    const {data, status} = useQuery("details", getDetails, { cacheTime: 0});

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
            {status === "error" && (<div style={{"color": "red"}}>Error fetching data</div>)}
            {status === "success" && (<InnerHTML html={data.main} />)}
        </div>
    )
};

export default ProjectE;