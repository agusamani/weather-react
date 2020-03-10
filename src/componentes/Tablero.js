import React from 'react';
import './Tablero.css';

import Tarjeta from './Tarjeta.js'

class Tablero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tarjetas: ["Buenos Aires", "San Pablo", "Bogota", "Lima", "Santiago"]
    };
  }

  createBoard() {
    let board = [];
    let prueba = "";
    for (var i = 0; i < this.state.tarjetas.length; i++) {
      board.push(this.renderTarjeta(this.state.tarjetas[i]));
    }
    return board;
  }

  renderTarjeta(nombreCiudad){
    return(<Tarjeta nombreCiudad = {nombreCiudad} />);
  }

  render(){
    return (
      <div className="row">
        {this.createBoard()}
      </div>
    );
  }
}

export default Tablero;
