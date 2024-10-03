import React, { useState } from 'react';
import FundSelector from '../components/FundSelector';
import SubscribeCancelForm from '../components/SubscribeCancelForm';

const FundSubscriptionPage = () => {
  const [selectedFundId, setSelectedFundId] = useState<string>('');

  return (
    <div>
      <h1>Suscribirse o Cancelar Suscripción a un Fondo</h1>
      <FundSelector onSelect={(fundId) => setSelectedFundId(fundId)} />
      {selectedFundId && <SubscribeCancelForm selectedFundId={selectedFundId} />}
    </div>
  );
};

export default FundSubscriptionPage;
