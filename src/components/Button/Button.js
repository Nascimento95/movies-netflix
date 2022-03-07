import { Buttons } from './Button.Styled';

function Button({text,largeur,hauteur, marge , backgr}) {
    
    return (
        <Buttons 
            bg={backgr}
            larg={largeur} 
            haut={hauteur}
            marg={marge}
        >{text}</Buttons>
    )
}

export default Button
