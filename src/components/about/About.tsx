import "./About.css";
import rectangle8 from "../../assets/img/rectangle8.png";
import rectangle9 from "../../assets/img/rectangle9.png";
import rectangle10 from "../../assets/img/rectangle10.png"

const About = () => {
    return (
        <section className="about">
            <div className="about-images">
                <div className="image-group">
                    <img src={rectangle8} alt="Rectangle 8" className="about-image" />
                    <img src={rectangle10} alt="Rectangle 10" className="about-image" />
                </div>
                <img src={rectangle9} alt="Rectangle 9" className="about-image side-image" />
            </div>
            <div className="about-text">
                <h2>About</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <a href="#more" className="read-more">Read More → </a>
            </div>
        </section>
    );
}

export default About;
