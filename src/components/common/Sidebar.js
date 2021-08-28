import './sidebar.css'
import { motion } from 'framer-motion'

const Sidebar = () => {
    return (
        <motion.div className="sidebar"
        initial={{ y:"100vh", opacity:0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2,
            ease: [0.87, 0, 0.13, 1],}}
            >
            <span>Scroll me</span>
        </motion.div>
    )
}

export default Sidebar
