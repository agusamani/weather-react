import React from 'react';
import Logo from '../logoHenry.png'
import './Busqueda.css';

function Busqueda() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        Henry - Weather App
      </a>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Ciudad..." aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Agregar</button>
      </form>
    </nav>
  );
}

export default Busqueda;
