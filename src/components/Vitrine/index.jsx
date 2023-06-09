import styled from 'styled-components'
import Look1 from '../Vitrine/Imagem/look1.png'
import Look2 from '../Vitrine/Imagem/look2.png'
import Look3 from '../Vitrine/Imagem/look3.png'
import Look4 from '../Vitrine/Imagem/look4.png'
import Look5 from '../Vitrine/Imagem/look5.png'
import Look6 from '../Vitrine/Imagem/look6.png'
import Look7 from '../Vitrine/Imagem/look7.png'
import Look8 from '../Vitrine/Imagem/look8.png'

export default function Vitrine(){

const Section4 = styled.section`
    display: flex;
`

const Section5 = styled.section`
    display: flex;
`

const H1 = styled.h1`
    border: double 10px;
    border-color: black;
    height: 50px;
    padding-top: 15px;
    background-color: azure;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: lavender;
    animation: piscaPisca 5s infinite;

    @keyframes piscaPisca{ /* Animação do titulo pisca pisca */
    0% {color: black;}
    5% {color: lavenderblush;}
    10%{color: black;}
    15%{color: lavenderblush;}
    20% {color: black;}
    25% {color: lavenderblush;}
    30% {color: black;}
    35% {color: lavenderblush;}
    40%{color: black;}
    45% {color: lavenderblush;}
    50% {color: black;}
    55%{color: black;}
    60% {color: lavenderblush;}
    65% {color: black;}
    70% {color: lavenderblush;}
    75%{color: black;}
    80%{color: lavenderblush;}
    85% {color: black;}
    90% {color: lavenderblush;}
    95% {color: black;}
    100% {color: lavenderblush;}
}
`

const H2 = styled.h2`
    background-color: lavenderblush;
    border-radius: 20px;
    font-size: 20px;
    width: 300px;
    text-align: center;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 15px;
`
const IMG = styled.img`
    width: 380px;
    height: 450px;
    padding: 10px;
`

    return(
        <main>

            <H1>Confira os Looks!!</H1>            

            <H2>Roupas femininas</H2>
            <Section4>
                <IMG src={Look1} alt="Look1" />
                <IMG src={Look2} alt="Look2" />
                <IMG src={Look3} alt="Look3" />
                <IMG src={Look4} alt="Look4" />
            </Section4>
            
            <H2>Roupas masculinas</H2>
            <Section5>
                <IMG src={Look5} alt="Look5" />
                <IMG src={Look6} alt="Look6" />
                <IMG src={Look7} alt="Look7" />
                <IMG src={Look8} alt="Look8" />
            </Section5>

        </main>
    )
}