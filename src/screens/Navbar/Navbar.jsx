import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return(
        <div className = 'navbar-container'>
            <div className = 'navbar-name'> Jorge Gomez </div>
            <div className = 'navbar-links-container'>
                <a > Home </a>
                <a > About me </a>
                <a > Skills </a>
                <a > Projects </a>
                <a > Contact </a>
            </div>
        </div>
    )
}