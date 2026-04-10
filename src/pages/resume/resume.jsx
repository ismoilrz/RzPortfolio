import eduLogo from "../../assets/education.svg";
import MySkills from "./mySkills";
import {motion} from 'framer-motion'
import "./resume.css"

const Resume = () => {
    return <>
        <section className="resume">
            <h1 className="resumeTitle">Resume</h1>

            <div className="education">
                <div className="educationTitle">
                    <div className="educationLogo">
                        <img src={eduLogo} alt="img" />
                    </div>
                    <motion.h3
                        initial={{opacity: 0, y: -60}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 40}} transition={{duration: 0.7}} 
                       >
                        Education & Certification
                    </motion.h3>
                </div>

                <div className="educationList1">
                    <div className="list1Title">
                        <div className="list1Check"></div>
                        <motion.h5
                            initial={{opacity: 0, x: 60}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: 20}}
                            transition={{duration: 0.1}}
                        >IT Park</motion.h5>
                    </div>
                    <motion.span
                        initial={{opacity: 0, x: 60}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 20}}
                        transition={{duration: 0.3}}
                    >Jun 2025</motion.span>
                    <motion.p
                        initial={{opacity: 0, x: 60}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: 20}}
                            transition={{duration: 0.5}}
                    >Front-End Programming</motion.p>
                </div>
                
                <div className="educationList1">
                    <div className="list1Title">
                        <div className="list1Check"></div>
                        <motion.h5
                            initial={{opacity: 0, x: 60}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: 20}}
                            transition={{duration: 0.1}}
                        >Coursera</motion.h5>
                    </div>
                    <motion.span
                         initial={{opacity: 0, x: 60}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 20}}
                        transition={{duration: 0.3}}
                    >Jul 2025</motion.span>
                    <motion.p
                         initial={{opacity: 0, x: 60}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 20}}
                        transition={{duration: 0.5}}
                    >Meta Front-End Developer</motion.p>
                </div>
            </div>

            <MySkills />
            
        </section>
    
    </>
}

export default Resume;