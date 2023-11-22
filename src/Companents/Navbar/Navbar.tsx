import './navbar.scss';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <a href="/">
                    <img src="logo.svg" alt="logo"/>
                    <span>Admin Panel</span>
                </a>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="search" className="icon"/>
                <img src="/app.svg" alt="app" className="icon"/>
                <img src="/expand.svg" alt="expand" className="icon"/>
                <div className="notification">
                    <img src="/notifications.svg" alt="notification"/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://avatars.githubusercontent.com/u/124918676?v=4" alt="avatar"/>
                    <span>Makc</span>
                </div>
                <img src="/settings.svg" alt="settings" className="icon"/>
            </div>
        </div>
    )
}