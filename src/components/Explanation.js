import React, { useEffect, useState } from 'react'; 
import Axios from 'axios'; 


function Explanation() {

  const [result, setResult] = useState([]); 

  useEffect(() => {
    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_INSIGHT_KEY}`)
     .then(res => {
        console.log(res.data); 
        setResult(res.data)
     })
     .then(error => {
        console.log(error); 
     })
  }, [])

  return (
    <div>
      <h1>Explain This!</h1>
      <p>{result.explanation}</p>
    </div>
  )
}

export default Explanation; 