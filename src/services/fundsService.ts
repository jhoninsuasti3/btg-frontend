export const getAvailableFunds = async () => {
	const response = await fetch('http://localhost:8000/funds', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	if (!response.ok) {
		throw new Error('Error al obtener los fondos')
	}

	return response.json()
}

export const subscribeToFund = async (data: {
	user_id: string
	fund_id: string
	amount: number // Asegúrate de incluir el campo amount
}) => {
	const response = await fetch('http://localhost:8000/funds/subscribe', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
	return response.json()
}

export const cancelFundSubscription = async (data: {
	user_id: string
	fund_id: string
}) => {
	const response = await fetch('http://localhost:8000/api/funds/cancel', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
	return response.json()
}

export const getTransactionHistory = async (userId: number) => {
	const response = await fetch(
		`http://localhost:8000/api/transactions/history/${userId}`
	)
	if (!response.ok) {
		throw new Error('Error al obtener el historial de transacciones')
	}
	return response.json()
}
