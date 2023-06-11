import React from "react";
import "./Navbar.css"
import hamburgerBtn from "./hamburger-menu.svg"

export default function Navbar() {
    return(
        <div className = 'navbar-container'>
            <div className = 'navbar-name'> 
                <div> Jorge Gomez </div>
                <img alt='hamburguer menu' src={hamburgerBtn}/>
            </div>
            <div className = 'navbar-links-container'>
                <a href='#home'> Home </a>
                <a href='#aboutme' > About Me </a>
                <a href='#skills'> Skills </a>
                <a href='#projects'> Projects </a>
                <a href='#contact'> Contact </a>
            </div>
        </div>
    )
}