import "./app.css"
import { useState, useEffect } from "react";
import Form from "./pages/form/Form";
import Home from "./pages/Home"
import "./components/nav.css"
import { Route, Routes } from "react-router-dom";


export default function App() {
  //Current weather fetch
  const [currentWeather, setCurrentWeather] = useState(null);

  const currentWeatherApiKey = process.env.REACT_APP_API_KEY;

  const getCurrentWeather = async (searchTerm) => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${currentWeatherApiKey}&units=imperial`;
    try {
      if (!searchTerm) {
        setCurrentWeather(null)
        return
      }
      const response = await fetch(currentWeatherUrl);
      const currentWeatherData = await response.json();
      setCurrentWeather(currentWeatherData);
    } catch (err) {
      console.error(err);
    }
  };

  //Past weather fetch
  const [pastWeather, setpastWeather] = useState(null);

  const getPastWeather = async (lat, lon, startDate, endDate) => {
    const pastWeatherUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=-${lon}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&temperature_unit=fahrenheit&windspeed_unit=mph`;

    try {
      if (!startDate && !lat) {
        setCurrentWeather(null)
        return alert(`please enter a valid date`)
      }
      const response = await fetch(pastWeatherUrl);
      const pastWeatherData = await response.json();
      console.log(
        "this is past weather data before setting state",
        pastWeatherData
      );
      // error handling
      // if (!pastWeatherData) {
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

  //how to have no default???
  // useEffect(() => {
  //   getPastWeather();
  // }, []);

  return (
    <div className="app">
      <Routes>
         <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={
          <Form
            citySearch={getCurrentWeather}
            currentWeather={currentWeather}
            getPastWeather={getPastWeather}
            pastWeather={pastWeather}
          />} />
      </Routes>  
    </div>
  );
  
}