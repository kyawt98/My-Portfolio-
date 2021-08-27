import SkillsBox from '../../common/SkillsBox'
import './skill.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div className="skills">
            <motion.div
            initial={{ x:"100vw", opacity:0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2,
                ease: [0.87, 0, 0.13, 1],}}
            className="title-box">
                <h2 className="title"><span className="no">02. </span>Skills</h2>
            </motion.div>
            <SkillsBox />
        </div>
    )
}

export default Skills
