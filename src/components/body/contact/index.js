import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import './contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-box">
                <h2 className="title"><span className="no">04. </span>Get in Touch</h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="info">
                            <PhoneIphoneIcon className="icon" />
                            <span className="phno">+95 9764863478</span> <br/>
                            <span className="phno">+95 9972205782</span>
                        </div>
                        <div className="info">
                            <AlternateEmailIcon className="icon"/>
                            <span>kyawtkyawtsan1998@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact-form">
                        <a className="btnHi" href="#" type="button">Say Hello!</a>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Contact
