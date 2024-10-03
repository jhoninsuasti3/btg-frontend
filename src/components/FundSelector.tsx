import React, { useEffect, useState } from 'react'
import { getAvailableFunds } from '../services/fundsService'

interface Fund {
	id: string
	name: string
}

interface FundSelectorProps {
	onSelect: (fundId: string) => void
}

const FundSelector: React.FC<FundSelectorProps> = ({ onSelect }) => {
	const [funds, setFunds] = useState<Fund[]>([])

	useEffect(() => {
		const fetchFunds = async () => {
			const availableFunds = await getAvailableFunds() // API para obtener los fondos disponibles
			setFunds(availableFunds)
		}
		fetchFunds()
	}, [])

	return (
		<select onChange={e => onSelect(e.target.value)}>
			<option value="">Selecciona un fondo</option>
			{funds.map(fund => (
				<option key={fund.id} value={fund.id}>
					{fund.name}
				</option>
			))}
		</select>
	)
}

export default FundSelector
