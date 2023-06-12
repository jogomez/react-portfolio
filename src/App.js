import React from "react";
import "./App.css"
import { Navbar, Landing, AboutMe, Skills, Projects, Contact } from "./screens"


export default function App() {
  return (
    <div>
        <Navbar />
        <Landing />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}