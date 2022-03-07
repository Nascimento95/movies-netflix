import './NavHome.css'
import logoNetflix from '../../assets/netflixLogo.png'
import Button from '../Button/Button'
function NavHome() {
    return (
            <nav>
                {/* <h1 className="title_nav_home"> NETFLIX </h1> */}
                <img className="title_nav_home" src={logoNetflix} alt="logo_netflix"/>
                <div>
                    <Button text = "Français"/>
                    <Button text = "S'inscrire"/>
                </div>
            </nav>
    )
}

export default NavHome
