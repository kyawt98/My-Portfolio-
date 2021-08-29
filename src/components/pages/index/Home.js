import './home.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import About from '../about'
import Skills from '../skills'
import Projects from '../projects'
import Contact from '../contact'
const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div className="home-box">  
            <div className="home-info">
                <div className="home-title">
                    <motion.span className="hello"
                    initial={{ x:"-100vw", opacity:0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2,
                        ease: [0.87, 0, 0.13, 1],}}>Hi, my name is </motion.span>
                    <motion.h2 className="title"
                    initial={{ x:"100vw", opacity:0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.2,
                        ease: [0.87, 0, 0.13, 1],}}>Kyawt Kyawt San</motion.h2>
                </div>
              <motion.div className="content-box"
              initial={{ x:"-50vw", opacity:0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.2,
                ease: [0.87, 0, 0.13, 1],}}>
                    <p className="content">
                        I'm a software engineer specializing in building
                        (and occasionally designing) exceptional digital experiences.
                    </p>    
                    <p className="content">
                        I develop web applications with HTML, CSS, JavaScript and Laravel.
                    </p> 
                              
                </motion.div>
                <motion.a
                initial={{ y:"50vh", opacity:0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type:"opacity",duration: 2, delay: 1,
                    ease: [0.87, 0, 0.13, 1],}}
                 className="resume-download" download href={require('../../../assets/resume.pdf').default}>Download Resume</motion.a>     
            </div>
        </div>
    )
}

export default Home
