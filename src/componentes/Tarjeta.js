import React from 'react';
import './Tarjeta.css';
import Sun from '../sun.png'
import { Link } from 'react-router-dom';

class Tarjeta extends React.Component {

  constructor(props) {
    super(props);
    this.clickBorrar = this.clickBorrar.bind(this);
  }

  clickBorrar() {
    this.props.onBorrar(this.props.index);
  }
  join(str) {
    const string = str.replace(' ', '');
    return string
  }
  render() {
    const nameCity = this.join(this.props.data.nombreCiudad)
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={this.clickBorrar} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <Link to={`/${nameCity}/${this.props.data.id}`} >
            <h5 className="card-title">{this.props.data.nombreCiudad}</h5>
          </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{this.props.data.tempMin}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{this.props.data.tempMax}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+this.props.data.icon+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tarjeta;
