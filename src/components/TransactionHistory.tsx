import React, { useEffect, useState } from 'react';
import { getTransactionHistory } from '../services/fundsService';

interface Transaction {
  id: string;
  detail: string;
  amount: number; // Asegúrate de ajustar estos campos según la respuesta de tu API
}

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const history = await getTransactionHistory(1); // Asume que el usuario tiene ID 1
        setTransactions(history);
      } catch (err) {
        setError('Error al obtener el historial de transacciones.');
      }
    };
    fetchTransactions();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Historial de Transacciones</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.detail} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
