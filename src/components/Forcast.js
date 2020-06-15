import React, { useEffect, useState } from 'react'; 
import Axios from 'axios'; 
import CurrentWeather from './CurrentWeather'; 


function Forcast() {

  const [weather, setWeather] = useState([]); 
  const [gotData, setGotData] = useState(false); 


  useEffect(() => {
    Axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_INSIGHT_KEY}&feedtype=json&ver=1.0`)
     .then(res => {
        console.log(res.data); 
        setWeather(res.data)
        setGotData(true); 
     })
     .then(error => {
        console.log(error); 
     })
    
  
  }, [])


  if(gotData) {
    return (
      <div>
        <CurrentWeather 
          sol={weather.sol_keys[6]}
          date={weather[weather.sol_keys[6]].First_UTC}
          maxTemp={weather[weather.sol_keys[6]].AT.mx}
          minTemp={weather[weather.sol_keys[6]].AT.mn}
          windDir={weather[weather.sol_keys[6]].WD.most_common.compass_point}
          season={weather[weather.sol_keys[6]].Season}
        />
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
    
  }
  
}

export default Forcast; 