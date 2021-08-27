import './notfound.css'
const NotFound = () => {
    return (
        <div className="notfound">
            <div className="notfound-content">
                <h1>"Nom! Nom! I'm hungry!" <span>"don't worry my friend! I <span className="eat">don't</span> eat you :D"</span></h1>
                <p>It's just a <span>404</span> error!!</p>
            </div>
            <img src={require('../../assets/kingshark.png').default} className="error-img" />
        </div>
    )
}

export default NotFound
