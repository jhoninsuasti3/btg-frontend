import React, { useState } from 'react'
import FundSelector from '../components/FundSelector'
import SubscribeCancelForm from '../components/SubscribeCancelForm'

const FundSubscriptionPage: React.FC = () => {
	const [selectedFundId, setSelectedFundId] = useState('')
	const [investmentAmount, setInvestmentAmount] = useState<number>(0)

	const handleSelectFund = (fundId: string, amount: number) => {
		setSelectedFundId(fundId)
		setInvestmentAmount(amount)
	}

	return (
		<div>
			<h2>Suscribirse o Cancelar Suscripción a un Fondo</h2>
			<FundSelector onSelect={handleSelectFund} />
			{selectedFundId && (
				<SubscribeCancelForm
					selectedFundId={selectedFundId}
					investmentAmount={investmentAmount}
				/>
			)}
		</div>
	)
}

export default FundSubscriptionPage
