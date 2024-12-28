import "./Hero.css";
import HeroImg from "../../assets/img/Rectangle6.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    <span className="project">Project</span><br />
                    <span className="lorum">Lorum</span>
                </h1>
            </div>
            <div className="hero-image">
                <img src={HeroImg} alt="Rectangle 6" />
                <a href="#" className="view-project">
                    View Project! → 
                </a>
            </div>
        </section>
    );
}

export default Hero;