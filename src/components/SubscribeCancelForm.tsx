import React, { useState } from 'react'
import {
	subscribeToFund,
	cancelFundSubscription
} from '../services/fundsService'

interface SubscribeCancelFormProps {
	selectedFundId: string
	investmentAmount: number
}

const SubscribeCancelForm: React.FC<SubscribeCancelFormProps> = ({
	selectedFundId,
	investmentAmount
}) => {
	const [message, setMessage] = useState('')

	const handleSubscribe = async () => {
		try {
			await subscribeToFund({
				user_id: '73c035f3-8d9e-48e3-8b02-e6fdab26d928', // user_id fijo
				fund_id: selectedFundId,
				amount: investmentAmount
			})
			setMessage('Suscripción exitosa.')
		} catch (error) {
			setMessage('Error al suscribirse al fondo.')
		}
	}

	const handleCancel = async () => {
		try {
			await cancelFundSubscription({
				user_id: '73c035f3-8d9e-48e3-8b02-e6fdab26d928', // user_id fijo
				fund_id: selectedFundId
			})
			setMessage('Cancelación exitosa.')
		} catch (error) {
			setMessage('Error al cancelar la suscripción.')
		}
	}

	return (
		<div>
			<button
				onClick={handleSubscribe}
				disabled={!selectedFundId || investmentAmount <= 0}
			>
				Suscribirse
			</button>
			<button onClick={handleCancel} disabled={!selectedFundId}>
				Cancelar Suscripción
			</button>
			{message && <p>{message}</p>}
		</div>
	)
}

export default SubscribeCancelForm
