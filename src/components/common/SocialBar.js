import './socialbar.css'
import { SocialData } from '../data/social'
const SocialBar = () => {
    const data = SocialData
    return (
        <div className="social-links">
            { data.map((item) => {
                return (
                    <a className="social-item" href={item.link}>
                        <img className="social-icon" src={item.icon} />
                    </a>
                )
            }) }
        </div>
    )
}

export default SocialBar
