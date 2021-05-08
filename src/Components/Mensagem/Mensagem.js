import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid #000;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    background: lightgray;
`
const MensagemUsuario = styled.div`
display:flex;
justify-content: left;
margin-left: 10px;
`
const CaixaDeMensagem = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 92vh;
`
const CaixaDeInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;

`
const BotaoEnviar = styled.button`
    border-radius: 5px;
    border: none;
    padding: 10px 10px;

    :hover{
        background: #fff;
    }
`
const InputName = styled.input`
    width: 20%;
    border-radius: 5px;
    border: none;
`

const InputMensagem = styled.input`
    width: 65%;
    border-radius: 5px;
    border: none;
`

export class Mensagem extends React.Component {
    state = {
        mensagens: [{
            nameUser: '',
            mensagemUser: ''
        }],

        inputNameUser: '',
        inputMensagemUser: ''
    }

    enviarMensagem = () => {

        let mensagem = {
            nameUser: this.state.inputNameUser,
            mensagemUser: ': ' + this.state.inputMensagemUser,
        }

        let novasMensagens = [...this.state.mensagens, mensagem]

        this.setState({
            mensagens: novasMensagens,
            inputNameUser: '',
            inputMensagemUser: ''
        })
    }

    handleKeyPress = (event) =>{
        if (event.key == 'Enter') {
            let mensagem = {
                nameUser: this.state.inputNameUser,
                mensagemUser: ': ' + this.state.inputMensagemUser,
            }
    
            let novasMensagens = [...this.state.mensagens, mensagem]
    
            this.setState({
                mensagens: novasMensagens,
                inputNameUser: '',
                inputMensagemUser: ''
            })
        }
    }

    onChangeNameUser = (event) => {
        this.setState({
            inputNameUser: event.target.value
        })
    }

    onChangeMensagemUser = (event) => {
        this.setState({
            inputMensagemUser: event.target.value
        })
    }

    render() {

        let listaMensagens = this.state.mensagens.map((mensagem) => {
            return (
                <MensagemUsuario>
                    <p><b>{mensagem.nameUser}</b>{mensagem.mensagemUser}</p>
                </MensagemUsuario>
            )
        })
        return (
            <Container>
                <CaixaDeMensagem>
                    {listaMensagens.reverse()}
                </CaixaDeMensagem>
                <CaixaDeInput>
                    <InputName
                        onChange={this.onChangeNameUser}
                        value={this.state.inputNameUser}
                        placeholder={'Usuário'}
        
                    />
                    <InputMensagem
                        onChange={this.onChangeMensagemUser}
                        value={this.state.inputMensagemUser}
                        placeholder={'Mensagem'}
                        onKeyPress={this.handleKeyPress}
                    />
                    <BotaoEnviar onClick={this.enviarMensagem}>Enviar</BotaoEnviar>
                </CaixaDeInput>
            </Container>
        )

    }
}