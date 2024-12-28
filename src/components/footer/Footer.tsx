import "./Footer.css";
import logoFooter from "../../assets/img/group11.png";
import facebook from "../../assets/img/facebook (1).png";
import twitter from "../../assets/img/twitter.png";
import linkedIn from "../../assets/img/Linked In.png"
import pinterest from "../../assets/img/pininterest.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logoFooter} alt="Logo" />
            </div>
            <div className="footer-nav">
                <h3>Information</h3>
                <p>Main</p>
                <p>Gallery</p>
                <p>Projects</p>
                <p>Certifications</p>
                <p>Contacts</p>
            </div>
            <div className="footer-contact">
                <h3>Contacts</h3>
                <p>
                    1234 Sample Street
                    <br />
                    Austin Texas 78704
                </p>
                <p>512.333.2222</p>
                <p>sampleemail@gmail.com</p>
            </div>
            <div className="footer-social">
                <h3>Social Media</h3>
                <div className="footer-social-logo">
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={linkedIn} alt="LinkedIn" />
                    <img src={pinterest} alt="Pinterest" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;