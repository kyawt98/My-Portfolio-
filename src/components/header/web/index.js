import { NavLink } from 'react-router-dom'
import './web.css'

const Web = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <span className="no">01. </span><NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <span className="no">02. </span><NavLink to="/skills">Skills</NavLink>
            </li>
            <li className="nav-item">
                <span className="no">03. </span><NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
                <span className="no">04. </span><NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}

export default Web
