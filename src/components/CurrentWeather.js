import React from 'react'; 



function CurrentWeather(props) {
  return (
    <div className="current-weather-container">
      <div className="weather-grid">
        <div>
          <h1>Sol {props.sol}</h1>
          <p>{props.date}</p>
        </div>
        <div>
          <h2>Temp</h2>
          <p>Max: {props.maxTemp} &deg;C</p>
          <p>Min: {props.minTemp} &deg;C</p>
        </div>
      </div>
      <div className="weather-grid-center">
        <div>
          <h2>Wind</h2>
          <p>Wind Direction: {props.windDir}</p>
          <p>Wind Direction Degrees: {props.windDirDegrees}</p>
        </div>
      </div>
      
    </div>
  )
}

export default CurrentWeather