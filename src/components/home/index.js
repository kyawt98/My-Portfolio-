import './home.css'
import Header from '../header/index'
import Body from '../body/index'
import Footer from '../footer/index'
import Sidebar from '../common/Sidebar'
import SocialBar from '../../components/common/SocialBar';

const Index = () => {

    return (
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
    )
}

export default Index
