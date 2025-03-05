import { useState } from "react"
import { NavLink } from "react-router-dom";
import "./Navbar.css"


export default function Navbar(){
    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
        
        <>
            <input type="checkbox" id="nav-toggle"/>
            <header>
                <NavLink to="/" className="logo">
                        <h2>MJ Eng</h2>
                </NavLink>
                <nav>
                    <ul className={isNavOpen ? "open": " "}>
                        <li><NavLink to="/about-me">About Me</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to ="/resume">Resume</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    
                </nav>
                <p className="toggle-input" onClick={()=> setIsNavOpen(!isNavOpen)}>☰</p> 
            </header>
        </>

    )
}