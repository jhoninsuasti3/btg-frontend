import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Bienvenido a la plataforma de Fondos de BTG Pactual</h1>
        <Routes>
          {/* Aquí definirás tus rutas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
