import styled from "styled-components"

export default function Cadastro(){

const Form = styled.form`
    padding: 30px;
    margin: auto;
`

const H1 = styled.h1`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`

const Label = styled.label`
    display: block;
    font-size: 15px;
    margin: 10px 0 10px; /* Espaço de 10px abixo do label*/
`

const Legend = styled.legend`
    display: block;
    font-size: 15px;
    margin: 0 0 10px ;
`

    return(
    <main>
        <H1>Realize já o seu cadastro e compre conosco!</H1>

        <Form >
            <Label htmlFor="nomecompleto">Nome Completo</Label>
            <input type="text" id="nomecompleto" className="input-padrao" required/>

            <Label htmlFor="cpf">CPF</Label>
            <input type="text"  id="cpf" className="input-padrao" />

            <Label htmlFor="telefone">Telefone</Label>
            <input type="tel" id="telefone" className="input-padrao" required placeholder="(XX) XXXXX-XXXX" />

            <fieldset>
                <Legend>Qual é o tipo de número do telefone?</Legend>
                <select name="" id="">
                    <option value="">Pessoal</option>
                </select>
            </fieldset>

            <Label htmlFor="email">Email</Label>
            <input type="email" id="email" className="input-padrao" required/>

            <Label htmlFor="bairro">Bairro</Label>
            <input type="text" id="bairro" className="input-padrao" />

            <Label htmlFor="rua">Rua</Label>
            <input type="text" id="rua" className="input-padrao"/>

            <Label htmlFor="numero">Nº</Label>
            <input type="number" id="numero" className="input-padrao"/>

            <Label htmlFor="cep">CEP</Label>
            <input type="text" id="cep" className="input-padrao"/>

            <Label htmlFor="observacao">Observação</Label>
            <textarea id="observacao" cols={"42"} rows="10"></textarea>

            <Label> <input className="checkbox" type={"checkbox"} checked/> Gostaria de receber as novidades por e-mail?</Label>

            <input className="salvar" type={"submit"} value="Salvar cadastro"/>
        </Form>
        
    </main>
    )
}