import "./Header.css";
import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";
import DarkMode from "../darkMode/DarkMode";
import lightLogo from "../../assets/img/Group8.png";
import darkLogo from "../../assets/img/group11.png"

const Header = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
            <div className="header-logo">
                
                <img src={darkMode ? darkLogo : lightLogo} alt="Logo" />
            </div>

            <nav className="header-nav">
                <a href="#main">Main</a>
                <a href="#gallery">Gallery</a>
                <a href="#projects">Projects</a>
                <a href="#certifications">Zertifikate</a>
                <a href="#contacts">Contacts</a>
            </nav>

            <div className="header-icon">
                <DarkMode />
            </div>
        </header>
    );
}

export default Header;