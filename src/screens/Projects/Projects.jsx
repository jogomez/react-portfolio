import {useState} from 'react'
import "./Projects.css"
import { projects } from "./projectLinks.js"
import { Modal } from "../components/index"

function Projects() {
    /* add use state to get the current index when user selects a project from the screen */
    const [currentIdx, setCurrentIdx] = useState(null);

    const handleClick = (idx) => setCurrentIdx(idx);
    const removeCurrent = () => setCurrentIdx(null);

    const projectList = projects.map((project, idx) => {
        return (
            <div 
                key={idx} 
                onClick={() => handleClick(idx)} 
                className="projects-frame"
            >
                <p>{project.title}</p>
                <img src={require(`${project.image}`)} alt={project.title}/>
            </div>
        );
    });

    //When currentIdx is greater than zero (i.e. user clicks one of the project images, then assign the projectId to 'currentProject'
    let currentProject = currentIdx >= 0 && projects[currentIdx]

    return (
        <div id="projects" className="projects-container">
            <h1>Projects</h1>
            <p> This is my GitHub page: &nbsp;
                <a href='https://github.com/jogomez' target="blank" rel='nonreferrer'>
                    https://github.com/jogomez
                </a>
            </p>
            <div className="projects-grid">
                {currentProject && (
                    <Modal 
                        onClick={removeCurrent}
                        title={currentProject.title} 
                        description={currentProject.description}
                        image={currentProject.image}
                        url={currentProject.url} 
                    />
                )}
                {projectList}
            </div>
        </div>
    )
}

export default Projects