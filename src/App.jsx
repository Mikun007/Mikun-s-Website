import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Home from "./Routers/Home";
import Cv from "./Routers/Cv";
import About from "./Routers/About";

import Project from "./Routers/Project";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/cv" element={<Cv />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/project" element={<Project />} />
                </Routes>
            </Router>

            
            <Footer />
        </QueryClientProvider>
        
    );
};

export default App;
