import React from 'react';
import './Tarjeta.css';

function Tarjeta() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Nombre de la Ciudad</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>32°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>35°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            IMG
          </div>
        </div>
        <a href="#" className="btn btn-danger">QUITAR</a>
      </div>
    </div>
  );
}

export default Tarjeta;
