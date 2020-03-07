import React from 'react';
import './App.css';

import Busqueda from './componentes/Busqueda.js'
import Tarjeta from './componentes/Tarjeta.js'

function App() {
  return (
    <div className="App">
      <Busqueda />
      <div className="row">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </div>
    </div>
  );
}

export default App;
