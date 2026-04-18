import { Skills } from "../../constansts/skillsData"

const SkillsContent = () => {
  return (
    <section className="skillsContent">
        {Skills.map((item, i) => (
            <div key={i} className="skill">
                <img src={item.pick} alt="logo" />
            </div>
        ))}
    </section>
  )
}

export default SkillsContent