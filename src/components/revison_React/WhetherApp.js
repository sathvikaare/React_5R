import  { useState } from "react"
import "./whether.css"

function WhetherApp() {
    const apiKey='30d4741c779ba94c470ca1f63045390a';
    const [weatherData,setWeatherData]=useState([{}]);
    const [city,setCity]=useState("")
    const getWether=(event)=>{
        if(event.key === "Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
            response=>response.json()).then(data=>{
                setWeatherData(data)
                setCity("")
            })}}
  return (
    <div className="container">
        <input 
        className="input" 
        placeholder="Enter City...."
        onChange={e=>setCity(e.target.value)}
        value={city}
        
        // onKeyPress={getWeather}
        onKeyPress={getWether}
        />
        {typeof weatherData.main === "undefined" ? (
            <div>
                <p>Welcome to Weather App! Enter the name of  city to get the weather....</p>
            </div>
        ):(
            <div className="weather-data">
                <p className="city">{weatherData.name}</p>
                <p className="temp">{Math.round(weatherData.main.temp)}F</p>
                <p className="weather">{weatherData.weather[0].main}</p>
            </div>
        )}
        {
            weatherData.cod ==="404" ? (<h2 className="error">City not found..</h2>):(<></>)
        }

    </div>
  );
}

export default WhetherApp;