import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid #000;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
`

const CaixaDeMensagem = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 500px;
`
const CaixaDeInput = styled.div`
    width: 100%;
`
const InputName = styled.input`
    width: 20%;
`

const InputMensagem = styled.input`
    width: 60%;
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
            mensagemUser: this.state.inputMensagemUser
        }

        let novasMensagens = [...this.state.mensagens, mensagem]

        this.setState({
            mensagens: novasMensagens.reverse(),
            inputNameUser: '',
            inputMensagemUser: ''
        })
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
                <div>
                    <p><b>{mensagem.nameUser}</b> {mensagem.mensagemUser}</p><p>:</p>
                </div>
            )
        })
        return (
            <Container>
                <CaixaDeMensagem>
                    {listaMensagens}
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
                    />
                    <button onClick={this.enviarMensagem}>Enviar</button>
                </CaixaDeInput>
            </Container>
        )

    }
}