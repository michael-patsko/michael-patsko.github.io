import React from "react";
import "./navbar.sass";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar is-spaced">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img className="image navbar-logo"src="src\assets\placeholder.png" width="48" height="48"></img>
                    <p className="navbar-name is-uppercase is-size-5-tablet is-size-6-mobile is-family-secondary has-text-weight-bold">Michael Patsko</p>
                </div>
                <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={toggleClass}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <Link to="/" className="navbar-item is-size-5 is-family-secondary has-text-weight-semibold">Home</Link>
                    <Link to="/about" className="navbar-item is-size-5 is-family-secondary has-text-weight-semibold">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;