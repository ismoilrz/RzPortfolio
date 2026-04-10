import { TestimonialsData } from "../../constansts/aboutData";
import {motion} from 'framer-motion'
import "./about.css"

const Testimonials = () => {
    return <>
        <section className="testimonials">
            <h3>Testimonials</h3>
            <div className="testimonialsMain">
                {TestimonialsData.map((item, i) => (
                    <motion.div
                        initial={{opacity: 0, y: -30}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.7}}
                        key={i} 
                        className="testimonialsCart"
                       >
                        <h5>{item.name}</h5>
                        <p>{item.info}</p>
                        <div className="tesPick"><img style={{width: '100%', height: '100%'}} src={item.img} alt="" /></div>
                    </motion.div>
                ))}
            </div>
        </section>
    </>
}

export default Testimonials;