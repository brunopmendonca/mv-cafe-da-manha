import React, { useState } from 'react'
import "./style.css"
import { Link, useHistory, useParams } from 'react-router-dom'
import imagem from "../../imagens/login.jpeg"


const Usuario = () => {
	
		return (
			<div className="tela-inteira">
				<header className="menu">
					<span>itens</span> 
				</header>
	
				<div className="telaUsuario">
	
					<h1>Bem Vindo!!</h1>
	
					<div className="pesquisa" >
						<h2>Digite o seu item do café da manha</h2>
						<input type="text" placeholder="Digite aqui" />
						<button > Pesquisar </button>
					</div>
					<div className="tela-cards">
					</div>
				</div>
			</div >
		)
	}

export default Usuario