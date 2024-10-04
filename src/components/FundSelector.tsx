import React, { useState, useEffect } from 'react'
import { getAvailableFunds } from '../services/fundsService'

interface Fund {
	id: string
	name: string
	min_investment: number
	category: string
}

interface FundSelectorProps {
	onSelect: (fundId: string, amount: number) => void
}

const FundSelector: React.FC<FundSelectorProps> = ({ onSelect }) => {
	const [funds, setFunds] = useState<Fund[]>([])
	const [selectedFund, setSelectedFund] = useState('')
	const [investmentAmount, setInvestmentAmount] = useState<number>(0)

	useEffect(() => {
		const fetchFunds = async () => {
			try {
				const data = await getAvailableFunds()
				setFunds(data.funds)
			} catch (error) {
				console.error('Error al obtener los fondos:', error)
			}
		}

		fetchFunds()
	}, [])

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedFund(e.target.value)
	}

	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const amount = parseFloat(e.target.value)
		setInvestmentAmount(amount)
	}

	const handleSubmit = () => {
		if (selectedFund && investmentAmount > 0) {
			onSelect(selectedFund, investmentAmount)
		}
	}

	return (
		<div className="p-8 bg-white shadow-md rounded-md w-1/2 mx-auto text-center">
			<h1 className="text-2xl font-bold mb-4">
				Suscribirse o Cancelar Suscripción a un Fondo
			</h1>

			<div className="mb-4">
				<label htmlFor="funds" className="block text-left mb-2 text-gray-700">
					Selecciona un fondo:
				</label>
				<select
					id="funds"
					className="border border-gray-300 p-2 rounded w-full"
					value={selectedFund}
					onChange={handleSelect}
				>
					<option value="">--Selecciona un fondo--</option>
					{funds.map(fund => (
						<option key={fund.id} value={fund.id}>
							{fund.name} - Mínimo: {fund.min_investment} ({fund.category})
						</option>
					))}
				</select>
			</div>

			<div className="mb-4">
				<label htmlFor="amount" className="block text-left mb-2 text-gray-700">
					Monto de inversión:
				</label>
				<input
					id="amount"
					type="number"
					className="border border-gray-300 p-2 rounded w-full"
					value={investmentAmount}
					onChange={handleAmountChange}
					placeholder="Ingresa el monto"
				/>
			</div>

			<button
				onClick={handleSubmit}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
				disabled={!selectedFund || investmentAmount <= 0}
			>
				Confirmar
			</button>
		</div>
	)
}

export default FundSelector
