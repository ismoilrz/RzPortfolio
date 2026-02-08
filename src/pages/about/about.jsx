import "./about.css"
import Testimonials from "./aboutTestimonials";

const About = () => {
    return <>
        <div className="about">
            <h1 className="aboutTitle">About Me</h1>
            <p className="aboutInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi ea aut officiis. Fugiat facere, in et saepe corrupti
                dicta accusantium eaque, ipsum expedita aspernatur, praesentium 
                sed. Minima nulla iusto debitis necessitatibus vero unde quia 
                perspiciatis laborum quidem sint nam, sit repellendus doloremque 
                voluptatibus aut dicta rem illo error deleniti dolore, tenetur quas 
                quae, impedit aliquid! Consectetur eos officia quasi adipisci eius 
                aliquam tempora. Nam dignissimos nisi error explicabo fugit est 
                pariatur voluptatum repellendus distinctio, doloribus, ullam quasi 
                nulla tempora illum voluptas maxime veritatis. Asperiores ipsam, 
                corrupti magni iure, quaerat non ex laborum soluta ad beatae 
                corporis vero rerum consequatur? Atque.
            </p>
            <div className="aboutTes">
                <Testimonials />
            </div>
        </div>
    
    </>
}

export default About;