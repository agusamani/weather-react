import React from 'react';
import './App.css';

import Busqueda from './componentes/Busqueda.js'
import Tarjeta from './componentes/Tarjeta.js'
import Tablero from './componentes/Tablero.js'

function App() {
  return (
    <div className="App">
      <Busqueda />
      <div className="row">
        <Tablero />
      </div>
    </div>
  );
}

export default App;
