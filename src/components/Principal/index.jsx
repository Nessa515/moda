import styled from "styled-components"
import Postagem from "../Postagem"
import Imagem1 from "../Postagem/Imagem/img3.png"
import Imagem2 from "../Postagem/Imagem/img1.png"
import Recente from "../Recente"
import Fundo from "../Principal/Imagem/fundo.png"


export default function Principal(){

const Header = styled.header`
    background-image: url(Fundo);
`

const Main = styled.main`
    display: block;
    background-color: azure;
    height: 1860px;
    width: 1100px;
    margin: auto;
    margin-top: 25px;
    display: flex;
    
`

const Section1 = styled.section`
`
const Section3 = styled.section`
flex-basis: 100%;
height: 0;

`


    return(
        <Header>
            <Main>
                <Section1>
                    <Postagem Data="Postado dia 6 de março de 2023" Img={Imagem1}/>
                    <Postagem Data="Postado dia 7 de março de 2023" Img={Imagem2}/>
                </Section1>

                <Section3>
                    <Recente/>
                     <Recente/>
                </Section3>   

            </Main>
        </Header>
        
    )
}