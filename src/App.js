import React from 'react';
import './App.css';

import Busqueda from './componentes/Busqueda.js'
import Tablero from './componentes/Tablero.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tarjetas: ["Buenos Aires", "San Pablo", "Bogota", "Lima", "Santiago"]
    };
    this.handleAgregar = this.handleAgregar.bind(this);
    this.handleBorar = this.handleBorar.bind(this);
  }

  handleAgregar(nombreCiudad) {
    console.log(nombreCiudad);
    this.setState({
      tarjetas: [...this.state.tarjetas, nombreCiudad]
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
