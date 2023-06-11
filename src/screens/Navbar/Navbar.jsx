import {useState} from "react";
import "./Navbar.css"
import hamburgerBtn from "./hamburger-menu.svg"

export default function Navbar() {
    const [showLinks, setShowLinks] = useState (true);
    const [showButton, setShowButton] = useState (false);

    const handleClick = () => setShowLinks(!showLinks);

    window.addEventListener("resize", (event) => {
        if (event.target.innerWidth > 768){
            setShowButton(false);
            setShowLinks(true);
        } else {
            setShowButton(true);
            setShowLinks(false);
        }
    });

    return(
        <div className = 'navbar-container'>
            <div className = 'navbar-name'> 
                <div> Jorge Gomez </div>
                {showButton && (
                    <img alt='hamburguer menu' src=
                    {hamburgerBtn} onClick={handleClick}/>
                )}
            </div>
            {showLinks && (
                <div className = 'navbar-links-container'>
                    <a href='#home'> Home </a>
                    <a href='#aboutme' > About Me </a>
                    <a href='#skills'> Skills </a>
                    <a href='#projects'> Projects </a>
                    <a href='#contact'> Contact </a>
                </div>
            )}
        </div>
    )
}