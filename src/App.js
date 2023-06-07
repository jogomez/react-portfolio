import React from 'react';
import './App.css';

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main>
      <About />
      <Footer />
      <Header />
      <Projects />
      <Skills />
    </main>
  );
}

