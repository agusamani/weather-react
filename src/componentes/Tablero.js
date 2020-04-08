import React from 'react';
import './Tablero.css';

import Tarjeta from './Tarjeta.js'
import { Link } from 'react-router-dom';

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

  renderTarjeta(i, data){
    return(<Tarjeta index= {i} data = {data} onBorrar={this.handleBorrar} />);
  }

  render(){
    const { tarjetas, onBorrar } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          {/* {this.createBoard()} */}
          {tarjetas.map((item, i) => <Tarjeta key= {i} data = {item} onBorrar={() => onBorrar(i)} />)}
        </div>
        <div className="about">
          <Link to="/about"> About</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Tablero;
