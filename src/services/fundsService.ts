export const getAvailableFunds = async () => {
	const response = await fetch(
		'https://0ct5gepevj.execute-api.us-east-1.amazonaws.com/Develop/funds',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)

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
	const response = await fetch(
		'https://0ct5gepevj.execute-api.us-east-1.amazonaws.com/Develop/funds/subscribe',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}
	)
	return response.json()
}

export const cancelFundSubscription = async (data: {
	user_id: string
	fund_id: string
}) => {
	const response = await fetch(
		'https://0ct5gepevj.execute-api.us-east-1.amazonaws.com/Develop/funds/cancel',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}
	)
	return response.json()
}

export const getTransactions = async () => {
	const response = await fetch(
		'https://0ct5gepevj.execute-api.us-east-1.amazonaws.com/Develop/transactions'
	)
	if (!response.ok) {
		throw new Error('Error al obtener las transacciones')
	}
	return response.json()
}
