import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
const WeatherApp = () => {
   
   let api_key = "ec7f96c593bad313ea77f757846943d4"

  async function Search(){
    
    const element = document.getElementsByClassName("cityName")
    if(element[0]===" "){
      return 0
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&q=${element[0].value}`

    let response= await fetch(url)
    let data = await response.json()
    const humidity= document.getElementsByClassName("humidity-percent")
    const wind= document.getElementsByClassName("humidity-rate")
    const temperature= document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML= data.main.humidity+" %"
    wind[0].innerHTML = data.wind.speed+" km/hr"
    temperature[0].innerHTML = ((data.main.temp -"273.15").toFixed(2))+"°C"

    location[0].innerHTML = data.name
    console.log(data)
  
   }

  return (
   
    <div>
    
      <div className="container">
        <div className="top-bar">
          <input
            type="text"
            className="cityName"
            placeholder="Enter your city name"
          />
          <div className="search-icon" onClick={()=>Search()}>
            <img src={search_icon} alt="img" />
          </div>
        </div>
        <div className="weather-image">
          <img src={cloud_icon} alt="img" />
        </div>

        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="weather-container">
          <div className="data-container">
            <div className="element">
              <img src={humidity_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-rate">18km/hr</div>
                <div className="text">wind speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
