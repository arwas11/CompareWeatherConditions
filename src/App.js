import { useState, useEffect } from "react";
import Form from "./components/Form";

export default function App() {
  //CURRENT
  const [currentWeather, setCurrentWeather] = useState(null);

  const currentWeatherApiKey = 

  const getCurrentWeather = async (searchTerm) => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${currentWeatherApiKey}&units=imperial`;
    try {
      if (!searchTerm) {
        setCurrentWeather(null)
        return
      }
      const response = await fetch(currentWeatherUrl);
      const currentWeatherData = await response.json();
      // console.log(currentWeatherData);
      setCurrentWeather(currentWeatherData);
      // console.log("this is currentWeatherData", currentWeatherData);
    } catch (err) {
      console.error(err);
    }
  };

  //PAST
  const [pastWeather, setpastWeather] = useState(null);

  const getPastWeather = async (lat, lon, startDate, endDate) => {
    const pastWeatherUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=-${lon}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&temperature_unit=fahrenheit&windspeed_unit=mph`;

    try {
      const response = await fetch(pastWeatherUrl);
      const pastWeatherData = await response.json();
      console.log(
        "this is past weather data before setting state",
        pastWeatherData
      );
      //error handling
      // if (pastWeatherData > 400) {
      //   return <h1>Network response was not OK</h1>
      // }
      // if (!response.ok) {
      //   throw new Error("Network response was not OK");
      // }
      setpastWeather(pastWeatherData);
      console.log(
        "this is past weather data after setting state",
        pastWeatherData
      );
    } catch (err) {
      console.error(err);
    }
  };

  // console.log("this is Current()", Current());
  //how to have no default???
  // useEffect(() => {
  //   getPastWeather();
  // }, []);

  return (
    <div className="App">
      <h1>Compare Today's Weather To How It Was In The Past</h1>
      <div className="cards-div">
        <Form
          citySearch={getCurrentWeather}
          currentWeather={currentWeather}
          getPastWeather={getPastWeather}
          pastWeather={pastWeather}
        />
      </div>
    </div>
  );
  
}