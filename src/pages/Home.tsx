import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
			<div className="bg-white p-8 rounded-md shadow-lg w-1/2 text-center">
				<h1 className="text-4xl font-bold text-gray-800 mb-8">Bienvenido</h1>

				<div className="flex justify-between space-x-4">
					<Link to="/funds" className="w-1/3">
						<button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
							Suscribirse/Cancelar Fondos
						</button>
					</Link>

					<Link to="/transactions" className="w-1/3">
						<button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
							Ver Historial de Transacciones
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
