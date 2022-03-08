import { Buttons } from './Button.Styled';

function Button({text,largeur,hauteur, marge , backgr , goMovies}) {

    return (
        <Buttons 
            onClick={goMovies}
            bg={backgr}
            larg={largeur} 
            haut={hauteur}
            marg={marge}
        >{text}</Buttons>
    )
}

export default Button
