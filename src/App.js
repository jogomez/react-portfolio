import React from "react";
import "./App.css"
import { Navbar, Landing, AboutMe } from "./screens"


export default function App() {
  return (
    <div>
        <Navbar />
        <Landing />
        <AboutMe />
    </div>
  );
}