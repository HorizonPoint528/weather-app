import React, { useState } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState({})
  const [ location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1eb0ed6283b3005f68c780d0c7794192`
  
  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('') // set search bar empty after pressing enter
    }
  }

  return (
    <div className="app">
      <div className='search'>
        <input value = {location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' onKeyDown={searchLocation} type='text'></input>
      </div>
      <div className='container'>
        <div className = "top">
          <div className='location'>
              <p>Bear</p>     
          </div>
          <div className='temp'>
            <h1>60° F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>65° F</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='winds'>
            <p className='bold'>12 MPH</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
