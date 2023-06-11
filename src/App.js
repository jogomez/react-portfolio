import React from "react";
import "./App.css"
import { Navbar, Landing, AboutMe, Skills } from "./screens"


export default function App() {
  return (
    <div>
        <Navbar />
        <Landing />
        <AboutMe />
        <Skills />
    </div>
  );
}