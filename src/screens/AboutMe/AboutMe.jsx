import "./AboutMe.css"

function AboutMe() {
  const image = require("./1669960036753.jpeg");
  return (
    <div id="aboutme" className="aboutme-container">
        <img src={image} alt={"author's face in a black background"}/>
        <div>
            <h1 id="aboutme-header">About Me</h1>
            <p>
              I am a software engineer with a passion for creating elegant and efficient solutions. <br/>
              <br/>
              With a strong foundation in programming and a drive to learn and adapt, I am excited to showcase my skills and projects in this portfolio. <br/>
              <br/>
              When I am not coding, I work full time as a Sr QA engineer and I love spending time with my two kids teaching them all kinds of sports.
              <br/>
            </p>
        </div>
    </div>
  )
}

export default AboutMe