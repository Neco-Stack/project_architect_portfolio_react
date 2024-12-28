import "./Projects.css";
import project from "../../assets/img/project1.png"
import image15 from "../../assets/img/image15.png";
import image16 from "../../assets/img/image16.png"; 
import image17 from "../../assets/img/image17.png"; 
import image18 from "../../assets/img/image18.png";

const Projects = () => {
    return (
        <section className="projects">
        <h1>Our Projects</h1>
        <div className="project-images-top">
            <div className="project-image-container">
                <a href="/sample-project" className="project-link"> 
                    <img src={project} alt="Sample Project" className="project-image first-image" />
                    <div className="overlay">
                        <p className="project-title">Sample <br /> Project</p>
                        <p className="view-more">VIEW MORE →</p>
                    </div>
                </a>
            </div>
            <img src={image15} alt="" className="project-image" />
        </div>
        <div className="project-images-bottom">
            <img src={image16} alt="" className="project-image" />
            <img src={image17} alt="" className="project-image" />
            <img src={image18} alt="" className="project-image" />
        </div>
        <a href="/all-projects" className="all-projects-button">ALL PROJECTS →</a>
    </section>
);
}

export default Projects;