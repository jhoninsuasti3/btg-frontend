export const subscribeToFund = async (data: { user_id: number; fund_id: string }) => {
    const response = await fetch('http://localhost:8000/api/funds/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  
  export const cancelFundSubscription = async (data: { user_id: number; fund_id: string }) => {
    const response = await fetch('http://localhost:8000/api/funds/cancel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  
  export const getTransactionHistory = async (userId: number) => {
    const response = await fetch(`http://localhost:8000/api/transactions/history/${userId}`);
    return response.json();
  };
  