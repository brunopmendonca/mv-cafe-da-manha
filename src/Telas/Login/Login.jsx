import React, { useState } from 'react'
import "./style.css"
import { Link, useHistory, useParams } from 'react-router-dom'
//import imagem from "../../imagens/login2.jpeg"


const Login = () => {

	let historia = useHistory()

    const [parametro, setParametro] = useState()
    const [name, setNome] = useState()
    const [senha, setSenha] = useState()



    const campoNome = (e) => {
        setNome(e.target.value)
    }

    const campoSenha = (e) => {
        setSenha(e.target.value)
    }


    async function irParaPerfil() {

        let response = await fetch("http://mv-api-java.herokuapp.com/colaborador", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*', 
				'content-type': 'aplication/json'
            },
            body: JSON.stringify({
                name: name,
                cpf: senha

            })

        })

        let json = await response.json()
		console.log(json)

        if (json == null) {
            window.alert("nao possui cadastro")
        }
        else {
            historia.push(`/Usuario`)
        }

    }



    return (

        <div className="telaLogin">

            <h1>Comics</h1>

            <div className="entradasLogin" >
                <span> Faça o seu login</span>
                <input onInput={(e) => { campoNome(e) }} placeholder="Usuario" />
                <input onInput={(e) => { campoSenha(e) }} placeholder="Senha" />
                <button onClick={() => {
                    irParaPerfil()
                }}> Entrar </button>
                <Link className="botao-cadastro" to="/cadastro"> Cadastrar</Link>
            </div>


        </div>
	)

}

export default Login