import './Home.css'
import NavHome from '../../components/NavHome/NavHome'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
function Home() {
    return (
        <div className=" header_home">
            <div className="card_black">
                <NavHome />
                <div className='container_title'>
                    <h1 className='title_home'>Films, séries Tv et bien <br/> plus en illimité.</h1>
                    <h2>Où que vous soyez. Annulez à tout moment.</h2>
                    <p>Prêt a regarder Le catalogue de netflix ? Saissisez votre adresse e-mail pour crée votre compte gratuit.</p>
                    <div className='contain_form_home'>
                        <Input/>
                        <Button text="Commencer" larg="180px" haut="100%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
