import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import LaunchIcon from '@material-ui/icons/Launch';
import './projectcard.css'
import { motion } from 'framer-motion';
const ProjectCard = ({ project }) => {
    return (
        <motion.div
        initial={{ y:"50vh", opacity:0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0.2,
                    ease: [0.87, 0, 0.13, 1],}}
        className="project">
            <div className="project-header">
                <FolderOutlinedIcon className="foldericon" />
                <a className="project-link" href={project.github}><img src={require('../../../assets/icons/github.svg').default} className="github-icon" /></a>
                <a className="project-link" href={project.demo}><LaunchIcon /></a>
            </div>
            <div className="project-body">
                <h3 className="p-title">
                    {project.title}
                </h3>
                <p className="project-about">
                    {project.about}
                </p>
            </div>
            <div className="project-footer">
                <span className="tags">
                    {project.tags.map((tag) => {
                        return(
                            <span className="tag">{ tag }  </span>
                        )
                    })}
                </span>
            </div>
        </motion.div>
    )
}

export default ProjectCard
