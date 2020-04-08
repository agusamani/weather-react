import React, { useEffect, useState } from "react";
import './Ciudad.css';


export default function Ciudad(props) {
    // const { match: { params: { id }}} = props;
    // const [city, setCiudad] = useState({})
    // useEffect(() => {
    //     const ciudadFiltrada = props.tarjetas.filter((item) => {
    //         console.log('en filter item.id',item.id)
    //         console.log('id en filter', parseInt(id))
    //         return item.id === parseInt(id)
    //     })
    //     setCiudad(ciudadFiltrada[0])
    // },[props.tarjetas, id])

    const [city, setCity] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        async function fetchData() {
            const { match: { params: { id }}} = props;
            let url = "http://api.openweathermap.org/data/2.5/weather?units=metric&id=";
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
            url = `${url}${id}&appid=${apiKey}`
            const res = await fetch(url)
            const data = await res.json()
            setCity(data)
            setLoading(false)
        }
        fetchData()
    },[props])

    return (
        <div className="ciudad">
            {loading ? <div>Cargando...</div> : 
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.main.temp} ºC</div>
                        <div>Clima: {city.weather[0].main}</div>
                        <div>Viento: {city.wind.speed} km/h</div>
                        <div>Cantidad de nubes: {city.clouds.all}</div>
                        <div>Latitud: {city.coord.lat}º</div>
                        <div>Longitud: {city.coord.lon}º</div>
                    </div>
            </div>}
        </div>
    )
}