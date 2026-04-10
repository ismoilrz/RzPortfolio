import "./contact.css"
import ContactForm from "./contactForm";
import Map from "./map";

const Contact = () => {
    return <>
        <section className="contact">
            <h1 className="contactTitle">Contact</h1>
            <Map />
        </section>
        <ContactForm />
    
    </>
}

export default Contact;