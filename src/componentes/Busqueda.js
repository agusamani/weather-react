import React from 'react';
import Logo from '../logoHenry.png'
import './Busqueda.css';

class Busqueda extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nombreCiudad: "",
      tempMin: null,
      tempMax: null
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
    var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    url = url + this.state.nombreCiudad + "&appid=" + apiKey;

    //Llamado a la API del clima
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((recurso) => {
        if(recurso.main !== undefined){
          this.setState({
            tempMin: Math.round(recurso.main.temp_min),
            tempMax: Math.round(recurso.main.temp_max),
            icon: recurso.weather[0].icon
          });
          this.props.onAgregar(this.state);
        } else {
          alert("Ciudad no encontrada");
        }
    })
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
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" disabled={!this.state.nombreCiudad}>Agregar</button>
        </form>
      </nav>
    );
  }
}

export default Busqueda;
