import "./Skills.css"
import { techs } from "./tech.js"

function Skills() {
    const techList = techs.map((tech, idx) => {
        return (
            <div className="skills-frames background-animation" key={idx}>
                <img src={tech.image} alt={tech.name}/>
                <h3>{tech.name}</h3>
            </div>
        )
    })

    return (
        <div id="skills" className="skills-container">
            <h1>Some of the technologies I am skilled at</h1>
            <div className="skills-grid-container">
                {techList}
            </div>
        </div>
    )
}

export default Skills