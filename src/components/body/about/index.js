import './about.css'
const About = () => {
    return (
        <div className="about-box">  
            <div className="about-info">
                <div className="about-title">
                    <h2 className="title"><span className="no">01. </span>Readme<span>.md</span></h2>
                </div>
                <div className="content-box">
                    <p className="content">
                        Hello! My name is Kyawt Kyawt San and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I joined the computing and information technology courses in <span><a href="#" class="uni-link">Info Myanmar University</a></span>  — where taught me a lot about software developments.                    </p>
                    <p className="content">
                        And then, I studied other things (frameworks, other programming languages) over internet.
                        My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.                    </p>
                </div>
            </div>
            <div className="img-box">
                <img src={require('../../../assets/kyawt.png').default} className="about-img" />
            </div>
        </div>
    )
}

export default About
