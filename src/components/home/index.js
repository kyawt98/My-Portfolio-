import './home.css'
import Header from '../header/index'
import Body from '../pages/index'
import Footer from '../footer/index'
import Sidebar from '../common/Sidebar'
import SocialBar from '../../components/common/SocialBar';
import { BrowserRouter } from 'react-router-dom'

const Index = () => {
    return (        
        <BrowserRouter>
            <div className="home">
                <div>
                    <Header />
                </div>
                <div>
                    <Body />
                </div>
                <div>
                    <Footer />
                </div>
                <Sidebar />
                <SocialBar/>
            </div>
         </BrowserRouter>
        
    )
}

export default Index
