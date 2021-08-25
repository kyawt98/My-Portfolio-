import './socialbar.css'
import { SocialData } from '../data/social'
import { motion } from 'framer-motion'

const SocialBar = () => {
    const data = SocialData
    return (
        <motion.div className="social-links"
        initial={{ y:"100vh", opacity:0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2,
            ease: [0.87, 0, 0.13, 1],}}>
            { data.map((item) => {
                return (
                    <a className="social-item" href={item.link}>
                        <img className="social-icon" src={item.icon} />
                    </a>
                )
            }) }
        </motion.div>
    )
}

export default SocialBar
