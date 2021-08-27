import About from './about/index'
import Skills from './skills/index'
import Projects from './projects/index'
import Contact from './contact/index'
import './body.css'
import Home from './index/Home'
import { Route, Switch } from 'react-router-dom'
import NotFound from '../error/NotFound'

const Body = () => {
    return (
        <div className="body">
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/about" component={ About }  />
                <Route path="/skills" component={ Skills }  />
                <Route path="/projects" component={ Projects }  />
                <Route path="/contact" component={ Contact }  />
                <Route component={ NotFound } />
            </Switch>
        </div>
    )
}

export default Body
