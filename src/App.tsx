import React from 'react'
import './App.css' // Si tienes algún estilo global
import AppRoutes from './routes/AppRoutes' // Importa las rutas

const App: React.FC = () => {
	return (
		<div className="App">
			<AppRoutes /> {/* Carga las rutas */}
		</div>
	)
}

export default App
