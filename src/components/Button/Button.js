import './Button.css'

function Button({text,larg,haut}) {
    return (
        <button 
            className = 'button_nav'
            style={{width:larg,height:haut}}>{text}</button>
    )
}

export default Button
