import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
	return (
		<div>
			<h1>Bienvenido</h1>
			<nav>
				<ul>
					<li>
						<Link to="/funds">Suscribirse/Cancelar Fondos</Link>
					</li>
					<li>
						<Link to="/transactions">Ver Historial de Transacciones</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Home
