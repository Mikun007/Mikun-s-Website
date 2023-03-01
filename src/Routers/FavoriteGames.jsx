import { useQuery } from "react-query";
import { motion } from "framer-motion";

async function getGames() {
    const res = await fetch("/games");
    return res.json();
}

function FavoriteGames() {
    const {data, status} = useQuery("movies", getGames)
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
            <div className="MG">
            
            {status === "success" && (
                data.map(movie => {
                    return (
                        <div className="card" key={movie.id}>
                            <div className="front" style={{"backgroundImage": `url(${movie.image})`}}>
                                <h2 style={{"color": "white"}}>{movie.name}</h2>
                            </div>
                            <div className="back" style={{"flexDirection": "column"}}>
                                <div style={{"display": "flex", "flexDirection": "column"}}>
                                    <span>⭐</span> <p>{movie.rating}</p>
                                </div>
                                <div>
                                    <p>{movie.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
        <p style={{"textAlign": "center", "margin-top": "3rem"}}>"There is lot of Games out there that i havn't played but
        these are my top picks right now. I will keep adding as i find anything interesting when i play any new game."</p>
        </motion.div>
    );
};

export default FavoriteGames;
