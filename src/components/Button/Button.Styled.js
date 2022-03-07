import  styled  from 'styled-components';

export const Buttons = styled.button`
    width: ${(props) => props.larg || "100px"};
    height: ${(props) => props.haut || "30px"};
    background: ${(props) => props.bg || "#e50914"} ;
    border: 1px solid #e50914;
    border-radius: 3px ;
    color: white;
    margin: ${(props) => props.marg || "0px 20px"};
    cursor: pointer;
`
