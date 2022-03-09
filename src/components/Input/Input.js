import { useNavigate } from 'react-router-dom'
import './Input.css'
import Button from '../Button/Button'
function Input() {
    let navigate = useNavigate()
    const goPageAllmovie = () => {
        navigate("/allfilm")
    }
    return (
        <form onSubmit={goPageAllmovie}>
            <input 
                required="required"
                className="input_home" 
                type="email" 
                placeholder="Adresse e-mail"
            />
            <Button 
                text="Commencer" 
                largeur="200px" 
                hauteur="100%"
                marge = "0px"
            />
        </form>
            
        
    )
}

export default Input
