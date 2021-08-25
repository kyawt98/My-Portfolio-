import './home.css'
const Home = () => {
    return (
        <div className="home-box">  
            <div className="home-info">
                <div className="home-title">
                <span className="hello">Hi, my name is </span>
                    <h2 className="title">Kyawt Kyawt San</h2>
                </div>
                <div className="content-box">
                    <p className="content">
                        I'm a software engineer specializing in building
                        (and occasionally designing) exceptional digital experiences.
                    </p>    
                    <p className="content">
                        I develop web applications with HTML, CSS, JavaScript and Laravel.
                    </p>                
                </div>
            </div>
        </div>
    )
}

export default Home
