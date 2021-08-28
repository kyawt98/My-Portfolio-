import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import './contact.css'
import { motion } from 'framer-motion';
const Contact = () => {


    return (
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
                            <div className="icon"><PhoneIphoneIcon  /></div>
                            <div>
                                <span className="phno" >+95 9764863478</span>
                                <span className="phno">+95 9972205782</span>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon"><AlternateEmailIcon /></div>
                            <div className="address"><span>kyawtkyawtsan1998@gmail.com</span></div>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ x:"-100vw", opacity:0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.2,
                        ease: [0.87, 0, 0.13, 1],}}
                    className="contact-form">
                        <a href="mailto:kyawtkyawtsan1998@gmail.com" title="from Porfolio" className="btnHi" type="button">Say Hello!</a>
                    </motion.div>
                    
                </div>
            </div>
            
    )
}

export default Contact
