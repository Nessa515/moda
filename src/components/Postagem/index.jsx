import styled from "styled-components"

export default function Postagem(props){

const PostagemP = styled.section`
    width: 700px;
`

const Data = styled.p`
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    padding: 20px 0 0 20px;
`
const Linha = styled.hr`
    width: 680px;
    justify-content: left;
    margin: 20px;
`

const Img1 = styled.img`
    height: 500px;
    width: 680px;
    padding: 0 0 10px 20px;
`

const Text1 = styled.p`
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    padding: 0 0 0 20px;
    text-align: justify;
`


    return(
        <PostagemP>
            <Data>{props.Data}</Data>
            <Linha />
            <Img1 src={props.Img} alt={props.Alt}/>
            <Text1>A moda é abordada como um fenômeno sociocultural que expressa os valores da sociedade - usos, hábitos e costumes - em um determinado momento. 
                Já o estilismo e o design são elementos integrantes do conceito moda, cada qual com os seus papéis bem definidos. 
                A moda é um sistema que acompanha o vestuário e o tempo, que integra o simples uso das roupas no dia a dia a um contexto maior, 
                político, social, sociológico. Pode-se ver a moda naquilo que se escolhe de manhã para vestir, no look de um punk, de um esqueitista e de um pop star, nas passarelas. 
                A cada dia que passa, o mundo da moda vem se superando e surpreendendo as pessoas, com cores vivas, tendências novas, cortes inusitados e inovadores. 
                A moda proporciona, aos que a seguem, uma inspiração sempre inovadora e ousada.
            </Text1>

        </PostagemP>


    )
}