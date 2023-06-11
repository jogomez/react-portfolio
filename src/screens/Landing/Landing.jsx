import React from 'react';
import Background from "../components/Background/Background";
import Typewritter from "../components/Typewritter/Typewritter"
import "./Landing.css";

let msgArray = [
  "Welcome",
  "to my",
  "portfolio"
]

function Landing() {
  return (
    <Background>
        <div className="landing-type">
          <div> Hi there! </div>
          <Typewritter data={msgArray}/>  
        </div>
    </Background >
  )
}

export default Landing;