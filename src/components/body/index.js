import About from './about/index'
import Skills from './skills/index'
import Projects from './projects/index'
import Contact from './contact/index'
import './body.css'
import Home from './index/Home'
const Body = () => {
    return (
        <div className="body">
            <section id='home'>
                <Home />
            </section>
            <section id='about'>
                <About />
            </section>
            <section id='skills'>
                <Skills />
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </div>
    )
}

export default Body
