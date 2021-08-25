import React from 'react'
import './project.css'
import { ProjectData } from "../../data/projects"
import ProjectCard from './ProjectCard'

const Projects = () => {
    const data = ProjectData
    return (
        <div className="project-box">  
            <div className="project-title">
                <h2 className="title"><span className="no">03. </span>Somethings I've build</h2>
            </div>
            <div className="project-container">
                { data.map((project) => {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects
