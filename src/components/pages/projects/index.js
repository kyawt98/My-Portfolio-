import React from 'react'
import './project.css'
import { ProjectData } from "../../data/projects"
import ProjectCard from './ProjectCard'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    const data = ProjectData
    return (
        <div className="project-box">  
            <motion.div
            initial={{ y:"-10vh", opacity:0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.2,
                ease: [0.87, 0, 0.13, 1],}}
            className="project-title">
                <h2 className="title"><span className="no">03. </span>Somethings I've build</h2>
            </motion.div>
            <div className="project-container">
                { data.map((project) => {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects
