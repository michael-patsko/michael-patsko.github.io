import React from "react";
import "./navbar.sass";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

const Navbar = () => {

    // This toggles the navbar menu between active and inactive
    const [isActive, setIsActive] = useState(false);
    const toggleClass = () => {
        setIsActive(!isActive);
    };

    // This is used to detect the default theme of the user's device
    const defaultScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // This toggles the theme between dark and light mode
    const [isDarkMode, setIsDarkMode] = useState(defaultScheme);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // This sets the theme of the page to the default theme of the user's device on page load
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", `${defaultScheme ? "dark" : "light"}`);
    }, []);

    // This updates the theme of the page when the user toggles the theme
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [isDarkMode]);

    const [iconsLoaded, setIconsLoaded] = useState(false);

    useEffect(() => {
        if (library.definitions.fas.sun && library.definitions.fas.moon) {
            setIconsLoaded(true);
        }
    }, [library.definitions.fas]);

    return (
        <nav className="navbar is-spaced">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img className="image navbar-logo"src="src\assets\placeholder.png" width="48" height="48"></img>
                    <p className="navbar-name is-uppercase is-size-5-tablet is-size-6-mobile is-family-secondary has-text-weight-bold">Michael Patsko</p>
                </div>

                <div className="navbar-item">
                    <span className={`icon is-large-tablet is-medium-mobile theme-toggle fa-2x fa-fw`} onClick={toggleDarkMode}>
                        {iconsLoaded && <FontAwesomeIcon 
                            className="theme-toggle-icon" 
                            icon={`fa-solid fa-${isDarkMode ? "sun" : "moon"}`}
                        />}
                    </span>
                </div>

                <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={toggleClass}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <div className="navbar-item has-text-right">
                        <Link to="/" className={`is-size-5 is-family-secondary has-text-weight-semibold ${isActive ? 'mr-5' : ''}`}>Home</Link>
                    </div>
                    <div className="navbar-item has-text-right">
                        <Link to="/about" className={`is-size-5 is-family-secondary has-text-weight-semibold ${isActive ? 'mr-5' : ''}`}>About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;