import './header.css'
import Web from './web/index'
import Mobile from './mobile/index'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/IconButton';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useState } from 'react'
import { blue } from '@material-ui/core/colors';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
            <div className="logo">
                <a href="#home"><img src={require('../../assets/icons/logo.png').default} /></a>
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <IconButton>
                            { !isOpen ? <MenuRoundedIcon fontSize="large" style={{ color: blue[500] }} /> : <CloseRoundedIcon fontSize="large" style={{ zIndex: 1, color: blue[500]}} />}
                        </IconButton>
                    </div>
                    { isOpen && <Mobile /> }
                </div>
            </div>
        </div>
    )
}

export default Header
