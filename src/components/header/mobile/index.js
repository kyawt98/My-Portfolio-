import { Link } from 'react-router-dom'
import './mobile.css'
const Mobile = () => {
    return (
        <ul className="nav-mobile">
            <li className="nav-mobile-item">
                <Link to="/about">About</Link>
            </li>
            <li className="nav-mobile-item">
                <Link to="/skills">Skills</Link>
            </li>
            <li className="nav-mobile-item">
                <Link to="/projects">Projects</Link>
            </li>
            <li className="nav-mobile-item">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Mobile
