
import { useState } from 'react';
import { DropDownContainer, ContentDown } from './DropDown.style';
import {FaGlobe} from 'react-icons/fa'
import {GoTriangleDown} from 'react-icons/go'
function DropDown() {

    const [toggleDrop , setToggleDrop] = useState(false)
    const [valueTag, setValueTag] =useState("Français")
    
    const toggleDown = () => {
        setToggleDrop(!toggleDrop)
    }

    const valueParaTag = ( value) => {
        setValueTag(value)
    }
    
    return (
        <DropDownContainer onClick={toggleDown}>
            <FaGlobe style={{color:"white",paddingRight:"4px"}} />
            <p>{valueTag}</p>
            <GoTriangleDown style={{color:"white", paddingLeft:"4px"}} />
            {toggleDrop && 
                <ContentDown>
                    <p onClick={() => valueParaTag("Français")}>Français</p>
                    <p onClick={() => valueParaTag("English")}>English</p>
                </ContentDown>  
            }
        </DropDownContainer>
        
    )
}

export default DropDown
