import SkillsBox from '../../common/SkillsBox'
import './skill.css'
import { motion } from 'framer-motion'
import SkillsBoxMobile from './mobile'
const Skills = () => {

    return (
        <section>
        <div className="skills">
            <motion.div
            initial={{ x:"30vw", opacity:0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2,
                ease: [0.87, 0, 0.13, 1],}}
            className="title-box">
                <h2 className="title"><span className="no">02. </span>Skills</h2>
            </motion.div>
            <div className="skillbar">
                <SkillsBox />
            </div>
            <div className="skillmobile">
                <SkillsBoxMobile  />
            </div>
        </div>
        </section>
    )
}

export default Skills
