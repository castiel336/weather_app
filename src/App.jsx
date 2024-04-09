import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import  axios  from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {

  const [cords, setCords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  const success = (pos) => { 
    const obj =  {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCords(obj)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])
 
  useEffect(() => {
    if (cords){
      const apiKey ="ea3405f708d14cb4c29ee8c055f0ed41";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cords?.lat}&lon=${cords?.lon}&appid=${apiKey}`;
      
      axios.get(apiUrl)
      .then(res => {
        const celcius = (res.data.main.temp - 273.15).toFixed(1);
        const farenheit = (celcius * 9/5 + 32).toFixed(1);
        setTemp({celcius, farenheit})
        setWeather(res.data)
      })
      .catch(err => console.log(err))
    }
  }, [cords])



  return (
    <div>
      <WeatherCard 
      weather={weather}
      temp={temp}/>
    </div>
  )
}

export default App
