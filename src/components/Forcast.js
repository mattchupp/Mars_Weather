import React, { useEffect, useState } from 'react'; 
import Axios from 'axios'; 


function Forcast() {

  const [weather, setWeather] = useState([]); 
  const [gotData, setGotData] = useState(false); 

  useEffect(() => {
    Axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_INSIGHT_KEY}&feedtype=json&ver=1.0`)
     .then(res => {
        console.log(res.data); 
        setWeather(res.data)
        // console.log(weather)
        setGotData(true); 
     })
     .then(error => {
        console.log(error); 
     })
    
     getSolData(); 
  }, [])

  function getSolData() {
    let weatherBySol = {
      sol_keys: weather.sol_keys,
      validity_checks: weather.validity_checks
    }
    console.log(weatherBySol)
  }


  if(gotData) {
    return (
      <div>
        <h1>Weather</h1>
       
        <p>Sol {weather.sol_keys[6]}</p>
        
      
        
  
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
    
  }
  
}

export default Forcast; 