import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FundSubscriptionPage from '../pages/FundSubscriptionPage';
import TransactionHistoryPage from '../pages/TransactionHistoryPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/funds" element={<FundSubscriptionPage />} />
        <Route path="/transactions" element={<TransactionHistoryPage />} /> {/* Aquí actualizas */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
