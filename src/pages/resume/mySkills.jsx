import DevLanguages from "./devLanguages";

import Technologies from "./technologies";
import "./resume.css"

const MySkills = () => {
    return <>
        <section className="MySkills">
            <h3 className="mySkillsTitle">My Skills</h3>
            <div className="skillsMain">
                <DevLanguages />
                <Technologies />
            </div>
        </section>
    </>
}

export default MySkills;