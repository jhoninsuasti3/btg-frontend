import React, { useEffect, useState } from 'react'
import { getTransactions } from '../services/fundsService'

interface Transaction {
	user_id: string
	fund_name: string
	fund_id: string
	amount: number
	uuid: string
	transaction_type?: string
	subscribed_at: string
}

const TransactionHistoryPage: React.FC = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchTransactions = async () => {
			try {
				const data = await getTransactions()
				setTransactions(data)
			} catch (err) {
				setError('Error al cargar las transacciones')
			}
		}

		fetchTransactions()
	}, [])

	if (error) {
		return <div className="text-red-500">{error}</div>
	}

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Historial de Transacciones</h1>
			{transactions.length === 0 ? (
				<p className="text-gray-600">No hay transacciones para mostrar.</p>
			) : (
				<table className="table-auto w-full bg-white shadow-md rounded-lg">
					<thead>
						<tr className="bg-gray-100">
							<th className="px-4 py-2 text-left">UUID</th>
							<th className="px-4 py-2 text-left">Nombre del Fondo</th>
							<th className="px-4 py-2 text-left">Tipo de Transacción</th>
							<th className="px-4 py-2 text-left">Monto</th>
							<th className="px-4 py-2 text-left">Fecha</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map(transaction => (
							<tr key={transaction.uuid} className="border-b">
								<td className="px-4 py-2">{transaction.uuid}</td>
								<td className="px-4 py-2">{transaction.fund_name}</td>
								<td className="px-4 py-2">
									{transaction.transaction_type || 'Suscripción'}
								</td>
								<td className="px-4 py-2">{transaction.amount}</td>
								<td className="px-4 py-2">
									{new Date(transaction.subscribed_at).toLocaleString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default TransactionHistoryPage
