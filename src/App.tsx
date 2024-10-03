import React from 'react';
import './App.css';  // Si tienes algún estilo global
import AppRoutes from './routes/AppRoutes';  // Importa las rutas

function App() {
  return (
    <div className="App">
      <AppRoutes />  {/* Renderiza todas las rutas */}
    </div>
  );
}

export default App;
