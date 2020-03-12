import React from 'react';
import './App.css';

import Busqueda from './componentes/Busqueda.js'
import Tablero from './componentes/Tablero.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tarjetas: []
    };
    this.handleAgregar = this.handleAgregar.bind(this);
    this.handleBorar = this.handleBorar.bind(this);
  }

  handleAgregar(nuevo) {
    this.setState({
      tarjetas: [...this.state.tarjetas, nuevo]
    });
  }

  handleBorar(i) {
    var copiaTarjetas = [...this.state.tarjetas];
    copiaTarjetas.splice(i, 1);
    this.setState({tarjetas: copiaTarjetas});
  }

  render() {
    return (
      <div className="App">
        <Busqueda onAgregar={this.handleAgregar} />
        <div className="row">
          <Tablero tarjetas={this.state.tarjetas} onBorrar={this.handleBorar}/>
        </div>
      </div>
    );
  }
}

export default App;
