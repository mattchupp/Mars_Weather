import React from 'react'; 



function CurrentWeather(props) {
  return (
    <div className="current-weather-card">
      <h1>Sol {props.sol}</h1>
      <p>{props.date}</p>
      <h2>Temp</h2>
      <p>Max: {props.maxTemp}</p>
      <p>Min: {props.minTemp}</p>
      <p>Wind Direction: {props.windDir}</p>
      <p>Wind Direction Degrees: {props.windDirDegrees}</p>
    </div>
  )
}

export default CurrentWeather