import React from 'react';
import './Tablero.css';

import Tarjeta from './Tarjeta.js'

class Tablero extends React.Component {

  constructor(props) {
    super(props);
    this.handleBorrar = this.handleBorrar.bind(this);
  }

  createBoard() {
    let board = [];
    for (var i = 0; i < this.props.tarjetas.length; i++) {
      board.push(this.renderTarjeta(i, this.props.tarjetas[i]));
    }
    return board;
  }

  handleBorrar(i){
    this.props.onBorrar(i);
  }

  renderTarjeta(i, nombreCiudad){
    return(<Tarjeta index= {i} nombreCiudad = {nombreCiudad} onBorrar={this.handleBorrar} />);
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
