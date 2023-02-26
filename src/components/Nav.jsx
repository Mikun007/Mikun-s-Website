import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState("");

    useEffect(() => {
        setCurrentLocation(location.pathname)
    }, [location])

    function isActive(path) {
        if (currentLocation === "/cv") {
            
        }
        return path === currentLocation ? "active" : "";
    };
    return (
        <div className="fixed-navbar-position-home">
                <nav id="navbar">
                    <p>BD.</p>
                    <Link to="/" className={isActive("/")}><i className="fa-solid fa-house"></i>Home</Link>
                    <Link to="/cv" className={isActive("/cv")}><i className="fa-solid fa-address-card fa-1.5x"></i>CV</Link>
                    <Link to="/about" className={isActive("/about")}><i className="fa-solid fa-circle-exclamation"></i>About</Link>
                </nav>
        </div>
    );
};

export default Nav;
