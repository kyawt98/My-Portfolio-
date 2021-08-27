import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import './contact.css'
import { useEffect } from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div className="contact">
            <div className="contact-box">
                <motion.h2
                initial={{ y:"-50vw", opacity:0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0.2,
                    ease: [0.87, 0, 0.13, 1],}}
                className="title"><span className="no">04. </span>Get in Touch</motion.h2>

                <div className="contact-container">
                    <motion.div
                    initial={{ x:"100vw", opacity:0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.2,
                        ease: [0.87, 0, 0.13, 1],}}
                    className="contact-info">
                        <div className="info">
                            <PhoneIphoneIcon className="icon" />
                            <span className="phno">+95 9764863478</span> <br/>
                            <span className="phno">+95 9972205782</span>
                        </div>
                        <div className="info">
                            <AlternateEmailIcon className="icon"/>
                            <span>kyawtkyawtsan1998@gmail.com</span>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ x:"-100vw", opacity:0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.2,
                        ease: [0.87, 0, 0.13, 1],}}
                    className="contact-form">
                        <a className="btnHi" href="#" type="button">Say Hello!</a>
                    </motion.div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Contact
