import React from "react";
import "./App.css"
import { Navbar, Landing, AboutMe, Skills, Projects } from "./screens"


export default function App() {
  return (
    <div>
        <Navbar />
        <Landing />
        <AboutMe />
        <Skills />
        <Projects />
    </div>
  );
}