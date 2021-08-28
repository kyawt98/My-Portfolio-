import './about.css'
import { motion } from 'framer-motion'

const About = () => {

    return (
        <section>
        <div className="about-box">  
            <div className="about-info">
                <motion.div
                initial={{ y:"-10vh", opacity:0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0.2,
                    ease: [0.87, 0, 0.13, 1],}}
                className="about-title">
                    <h2 className="title"><span className="no">01. </span>Readme<span>.md</span></h2>
                </motion.div>
                <div className="content-box">
                    <motion.p
                    initial={{ y:"30vh", opacity:0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type:"opacity", duration: 2, delay: 0.3,
                        ease: [0.87, 0, 0.13, 1],}}
                    className="content">
                        Hello! My name is Kyawt Kyawt San and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I joined the computing and information technology courses in <span><a href="https://imu.edu.mm/" class="uni-link">Info Myanmar University</a></span>  — where taught me a lot about software developments.                    
                    </motion.p>
                    <motion.p
                    initial={{ y:"50vh", opacity:0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type:"opacity",duration: 2, delay: 0.8,
                        ease: [0.87, 0, 0.13, 1],}}
                    className="content">
                        And then, I studied other things (frameworks, other programming languages) over internet.
                        My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.                    
                    </motion.p>
                </div>
            </div>
            <motion.div
            initial={{ x:"50vw", opacity:0 }}
            animate={{x:0, opacity: 1 , rotateZ:360}}
            transition={{ duration: 2, delay: 1,
                ease: [0.87, 0, 0.13, 1],}}
            className="img-box">
                <img src={require('../../../assets/kyawt.png').default} className="about-img" />
            </motion.div>
        </div>
        </section>
    )
}

export default About
