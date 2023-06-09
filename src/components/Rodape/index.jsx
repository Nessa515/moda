import styled from "styled-components"

export default function Rodape(){

const Rodape = styled.footer`
background-color: lavenderblush;
font-size: 15px;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
color: black;
margin: auto;
width: 1100px;
`  
    return(
        <Rodape>
            &copy; Vanessa Oliveira, 2023
        </Rodape>
    )
}