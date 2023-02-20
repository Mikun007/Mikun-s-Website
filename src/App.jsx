import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Home from "./Routers/Home";
import Cv from "./Routers/Cv";
import About from "./Routers/About";


function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/cv" element={<Cv />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </Router>

            
            <Footer />
        </div>
        
    );
};

export default App;
