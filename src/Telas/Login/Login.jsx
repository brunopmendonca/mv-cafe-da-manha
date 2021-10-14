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

	function entrar()
	{
		historia.push(`/Usuario`)
	}

    return (

        <div className="telaLogin">

            <h1>Comics</h1>

            <div className="entradasLogin" >
                <span> Faça o seu login</span>
                <input onInput={(e) => { campoNome(e) }} placeholder="Usuario" />
                <input onInput={(e) => { campoSenha(e) }} placeholder="Senha" />
                <button onClick={() => {
                    entrar()
                }}> Entrar </button>
                <Link className="botao-cadastro" to="/Usuario"> Cadastrar</Link>
            </div>


        </div>
	)

}

export default Login