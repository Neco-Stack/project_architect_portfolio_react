import "./Contact.css"; 
import image12 from "../../assets/img/image12.png"; 

const Contact = () => {
    return (
        <section className="contact">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <div className="contact-form">
                    <form>
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <input type="text" id="interests" name="interests" placeholder="Interested In" required />
                        <textarea id="message" name="message" placeholder="Message" required></textarea>
                    </form>
                </div>
                <img src={image12} alt="Contact" className="contact-image" />
            </div>
            <button type="submit" className="send-message-button">SEND EMAIL → </button>
        </section>
    );
}

export default Contact;