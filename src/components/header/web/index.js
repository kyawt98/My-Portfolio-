import { Link } from 'react-router-dom'
import './web.css'

const Web = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <span className="no">01. </span><Link to="/about">About</Link>
            </li>
            <li className="nav-item">
                <span className="no">02. </span><Link to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
                <span className="no">03. </span><Link to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
                <span className="no">04. </span><Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Web
