import './Home.css'
import NavHome from '../../components/NavHome/NavHome'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import DropDown from '../../components/DropDown/DropDown';


function Home() {
    
    return (
        <div className=" header_home">
            <div className="card_black">
                <div className='header_nav_home'>
                <NavHome />
                    <div className='dropAndButton'>
                        <DropDown/>
                        <Button text = "S'inscrire"/>
                    </div>
                </div>
                <div className='container_title'>
                    <h1 className='title_home'>Films, séries Tv et bien <br/> plus en illimité.</h1>
                    <h2>Où que vous soyez. Annulez à tout moment.</h2>
                    <p>Prêt a regarder Le catalogue de netflix ? Saissisez votre adresse e-mail pour crée votre compte gratuit.</p>
                    <div className='contain_form_home'>
                        <Input/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
