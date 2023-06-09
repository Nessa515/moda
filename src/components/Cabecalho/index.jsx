import styled from "styled-components"

export default function Cabecalho (){

const Header = styled.header`
    background-color: lavenderblush;
    text-align: center;
    
`
const Titulo = styled.h1`
    font-size: 40px;
    font-weight: bold;

`

const Menu = styled.nav`
    display: flex;
    justify-content: center;
    background-color: lavenderblush;
    padding: 8px;
`

const A = styled.a`
    margin-right: 20px;
    font-size: 18px;
`


    return(
        <Header>
            <Titulo>Moda&Moda</Titulo>
            <Menu>
                <A href="">Inicio</A>
                <A href="">Vitrine</A>
                <A href="">Cadastro</A>
            </Menu>
        </Header>

    )
}

