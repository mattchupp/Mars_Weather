import React from 'react'; 
import moment from 'moment'; 


function CurrentWeather(props) {

  // convert c to f
  function cToF(c) {
    return c * 9/5 + 32; 
  }

  return (
    <div className="current-weather-container">
      <div className="weather-card">
        <div className="weather-grid">
          <div>
            <h1>Sol {props.sol}</h1>
            <p>{moment.utc(props.date).format('LL')}</p>
          </div>
          <div>
            <h2>Temp</h2>
            <p>Max: {Math.round(cToF(props.maxTemp))} &deg;F</p>
            <p>Min: {Math.round(cToF(props.minTemp))} &deg;F</p>
          </div>
      
          <div>
            <h2>Season</h2>
            <p>{props.season.toUpperCase()}</p>
          </div>
        
          <div>
            <h2>Wind</h2>
            <p>Wind Direction: {props.windDir}</p>
            <p>Wind Direction Degrees: {props.windDirDegrees}</p>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather