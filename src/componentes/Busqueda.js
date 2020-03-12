import React from 'react';
import Logo from '../logoHenry.png'
import './Busqueda.css';

class Busqueda extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nombreCiudad: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      nombreCiudad: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAgregar(this.state.nombreCiudad);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Ciudad..." aria-label="Search" onChange={this.handleInputChange}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Agregar</button>
        </form>
      </nav>
    );
  }
}

export default Busqueda;
