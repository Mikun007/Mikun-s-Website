import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Routers/Home";
import Cv from "../Routers/Cv";
import About from "../Routers/About";

import Project from "../Routers/Project";
import ProjectE from "../Routers/ProjectE";
import NotFound from "../NotFound";

import FavoriteMovies from "../Routers/FavoriteMovies";
import FavoriteGames from "../Routers/FavoriteGames";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}/>
            <Route path="/cv" element={<Cv />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/project" element={<Project />} />
            <Route path="/project/detail/:id" element={<ProjectE />}/>
            <Route path="/movies" element={<FavoriteMovies />}/>
            <Route path="/games" element={<FavoriteGames />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
        </AnimatePresence>
    )
};

export default AnimatedRoutes;