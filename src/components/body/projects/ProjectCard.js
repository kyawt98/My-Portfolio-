import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import LaunchIcon from '@material-ui/icons/Launch';
import './projectcard.css'
const ProjectCard = ({ project }) => {
    return (
        <div className="project">
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
        </div>
    )
}

export default ProjectCard
