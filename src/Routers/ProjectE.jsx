import { useQuery } from "react-query";
import { useParams } from "react-router-dom";


function ProjectE() {
    const { id } = useParams();
    
    async function getDetails() {
        const res = await fetch("/details/" + id);
        return res.json();
    }

    const {data, status} = useQuery("details", getDetails);

    console.log(data)

    return (
        <div>
            {status === "loading" && "LOding..." }
            {status === "error" && "Error.."}
            {status === "success" && (<div dangerouslySetInnerHTML={{__html: data.main}}></div>)}
        </div>
    )
};

export default ProjectE;