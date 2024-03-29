import React, { useState } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState({})
  const [ location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1eb0ed6283b3005f68c780d0c7794192` //add units=imperial to convert kelvin to farhenheit
  
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
        {data.name !== undefined &&
          <div className = "top">
          <div className='location'>
              <h2>{data.name}</h2>     
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()} ° F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <h2>{data.weather[0].main}</h2> : null}
          </div>
        </div>
        }


        {data.name !== undefined &&
        <div className='bottom'>
          <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()} ° F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='winds'>
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Winds</p>
          </div>
        </div>
        }


      </div>
    </div>
  );
}

export default App;
