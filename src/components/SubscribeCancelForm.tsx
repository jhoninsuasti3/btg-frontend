import React, { useState } from 'react'
import {
	subscribeToFund,
	cancelFundSubscription
} from '../services/fundsService'

interface SubscribeCancelFormProps {
	selectedFundId: string
}

const SubscribeCancelForm: React.FC<SubscribeCancelFormProps> = ({
	selectedFundId
}) => {
	const [message, setMessage] = useState('')

	const handleSubscribe = async () => {
		try {
			await subscribeToFund({ user_id: 1, fund_id: selectedFundId })
			setMessage('Suscripción exitosa.')
		} catch (error) {
			setMessage('Error al suscribirse al fondo.')
		}
	}

	const handleCancel = async () => {
		try {
			await cancelFundSubscription({ user_id: 1, fund_id: selectedFundId })
			setMessage('Cancelación exitosa.')
		} catch (error) {
			setMessage('Error al cancelar la suscripción.')
		}
	}

	return (
		<div>
			<button onClick={handleSubscribe} disabled={!selectedFundId}>
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
