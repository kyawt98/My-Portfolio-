import './notfound.css'
import { motion } from 'framer-motion'
const NotFound = () => {
    return (
        <div className="notfound">
            <div className="notfound-content">
                <motion.h1
                initial={{ opacity:1, x:0}}
                animate={{opacity:0.8,x:"-10vw", transition:{ duration:5, delay:"10s"}}}
                transition={{ delay:"500ms", duration: 5 }}
                >"Nom! Nom! I'm hungry!" </motion.h1>
                <motion.span
                className="dontworry"
                initial={{ opacity:0, x:0}}
                animate={{opacity:1,x:"10vw", transition:{ duration:5, delay:2}}}
                transition={{ delay:"1000ms", duration: 5 }}
                >"don't worry my friend! I <span className="eat">don't</span> eat you :D"</motion.span>
                <motion.p
                initial={{ opacity:0}}
                animate={{opacity:1, transition:{ duration:25}}}
                transition={{ delay:"80000ms", duration: 55 }}
                >It's just a <span className="errorcode">404</span> error!!</motion.p>
            </div>
            <motion.img
            whileTap={{scale:0.8}}
            drag={ true }
            whileDrag={{ scale:0.9}}
            dragConstraints={{left:100, right:400, top:0, botton:200}}
            initial={{ opacity:0}}
            animate={{opacity:1, transition:{ duration:1}}}
            src={require('../../assets/kingshark.png').default} className="error-img" />
        </div>
    )
}

export default NotFound
