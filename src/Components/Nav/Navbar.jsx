import { useState } from "react"
import { NavLink } from "react-router-dom";
import "./Navbar.css"


export default function Navbar(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavLinkClick = () => {
        setIsNavOpen(false);
    };

    return(
        
        <>
            
            <input type="checkbox" id="nav-toggle" checked={isNavOpen} onChange={() => setIsNavOpen(!isNavOpen)}/>
            <header>
                <NavLink to="/" className="logo">
                        <h2>MJ Eng</h2>
                </NavLink>
                <nav>
                    <ul className={isNavOpen ? "open": " "}>
                        <li><NavLink to="/about-me" onClick={handleNavLinkClick}>About Me</NavLink></li>
                        <li><NavLink to="/projects" onClick={handleNavLinkClick}>Projects</NavLink></li>
                        <li><NavLink to ="/resume" onClick={handleNavLinkClick}>Resume</NavLink></li>
                        <li><NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink></li>
                    </ul>
                    
                </nav>
                <p className="toggle-input" onClick={()=> setIsNavOpen(!isNavOpen)}>☰</p> 
            </header>
        </>

    )
}