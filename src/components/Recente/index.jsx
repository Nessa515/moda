import Imagem3 from '../Recente/Imagem/img2.png'
import styled from "styled-components"

export default function Recente (){
const Section2 = styled.section`
    padding-top: 14px;
    padding-left: 30px;
`
    
const Titulo = styled.h1`
    background-color: lavenderblush;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    width: 350px;
`

const Img2 = styled.img`
    width: 350px;
    height: 480px;
`

const Text2 = styled.p`
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    width: 350px;
`
    return(
        <Section2>
            <Titulo>Postagem Recente</Titulo>
            <Img2 src={Imagem3} alt="Imagem de post recente" />
            <Text2>No início da Idade Moderna, há uma preferência nas cortes europeias pelo vermelho, as roupas mais refinadas levavam esta cor. 
                O metódo de tingimento utilizava o pau-brasil, extraído em larga escala no Brasil para atender a este modismo. 
                Podemos citar A Rainha Margot, filme francês de 1994, com Isabelle Adjani no papel título, dirigida por Patrice Chéreau: 
                logo na primeira cena (o casamento de Margot com Henrique de Bourbon, interpretado por Daniel Auteuil) 
                Margot está usando um modelo maravilhoso, vermelho, de cetim, com uma gola alta e larga de renda a lhe emoldurar o rosto; 
                sua mãe, Catarina de Médicis (vivida por Virna Lisi), também usa um modelo suntuoso, ao qual não falta nem mesmo o véu.</Text2>
                <hr/>
        </Section2>
    )
}