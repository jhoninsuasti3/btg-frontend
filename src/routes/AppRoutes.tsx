import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home' // Importa el Home
import FundSubscriptionPage from '../pages/FundSubscriptionPage' // Página de suscripción/cancelación
import TransactionHistoryPage from '../pages/TransactionHistoryPage' // Página del historial de transacciones

const AppRoutes: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} /> {/* Ruta Home */}
				<Route path="/funds" element={<FundSubscriptionPage />} />{' '}
				{/* Ruta Suscribirse/Cancelar Fondos */}
				<Route path="/transactions" element={<TransactionHistoryPage />} />{' '}
				{/* Ruta Historial de Transacciones */}
			</Routes>
		</Router>
	)
}

export default AppRoutes
