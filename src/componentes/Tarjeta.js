import React from 'react';
import './Tarjeta.css';
import Sun from '../sun.png'

const Tarjeta = (props) => {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
          <a href="#" className="btn btn-sm btn-danger">X</a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.nombreCiudad}</h5>
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
            <img id="logoHenry" src={Sun} width="50" height="50" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
