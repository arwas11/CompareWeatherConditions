// import { useState } from "react";

export default function CurrentWeather({ currentWeather }) {
  console.log("this is currentweather state", currentWeather);
  // console.log(name)
  
  try {
    
    const loaded = () => {
      const {
        name,
        wind,
        rain,
        snow,
        main,
        visibility,
        clouds,
        sys
      } = currentWeather;
      const icon = currentWeather.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
      return (
        <>
          Current weather data
          <h3>
            <i>City & Country Code</i>: {name}, {sys.country}
          </h3>
          <h3>
            
            Weather Description: "{currentWeather.weather[0].description}."
            <img src={iconUrl} alt="an icon describing the state of weather" />
          </h3>
          <h3> Sunrise: {sys.sunrise} </h3>
          <h3> Sunset: {sys.sunset} </h3>
          <h3> Current Tempreture: {main.temp} </h3>
          <h3> Feels Like: {main.feels_like} </h3>
          <h3> Today's Tempreture(min): {main.temp_min}</h3>
          <h3> Today's Tempreture(max): {main.temp_max}</h3>
          <h3> Rain: {rain} </h3>
          <h3> Snow {snow} </h3>
          <h3> Clouds: {clouds.all}% </h3>
          <h3> Humidity: {main.humidity} </h3>
          <h3> Visibility: {visibility} </h3>
          <h3> Wind Speed: {wind.speed} </h3>
          <h3> Wind Direction: {wind.deg} </h3>
        </>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h1>No Weather to Display</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return currentWeather ? loaded() : loading();
    
  } catch (err) {
    console.error(err)
  }
  
}
