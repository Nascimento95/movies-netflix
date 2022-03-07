import './NavHome.css'
import logoNetflix from '../../assets/netflixLogo.png'

function NavHome() {
    
    return (
            <nav>
                <img className="title_nav_home" src={logoNetflix} alt="logo_netflix"/>
                <div className='contain_button_dropdown'>
                </div>
            </nav>
    )
}

export default NavHome
