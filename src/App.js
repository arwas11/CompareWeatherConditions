import { useState, useEffect } from "react";
// import CurrentWeather from "./components/currentWeather/CurrentWeather";
import Form from "./components/Form";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  

  const getWeather = async (searchTerm) => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${currentWeatherApiKey}&units=imperial`;
    try {
      const response = await fetch(currentWeatherUrl);
      const currentWeatherData = await response.json();
      console.log(currentWeatherData);
      setCurrentWeather(currentWeatherData);
      console.log("this is currentWeatherData", currentWeatherData);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log("this is getweather()", getWeather());
  //how to have no default???
  // useEffect(() => {
  //   getWeather();
  // }, []);

  return (
    <div className="App">
      <h1>Compare today's Weather with How it was in the Past</h1>
      <div className="cards-div">
        <Form citySearch={getWeather} currentWeather={currentWeather} />
      </div>
    </div>
  );
}