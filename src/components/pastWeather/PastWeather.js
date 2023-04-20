import React from "react";

export default function PastWeather(props) {
  console.log("this is pastweather after fetch", props.pastWeather);

  const loaded = () => {
    const {
      temperature_2m_max, // might have to access index
      temperature_2m_min,
      sunrise,
      sunset,
      rain_sum,
      snowfall_sum,
      windspeed_10m_max,
      winddirection_10m_dominant,
    } = props.pastWeather.daily;

    return (
      <>
        Past weather data
        {/* •	Date fixing: to US format */}
        <h3>
          <i>{props.currentWeather.name}'s</i> Weather on {props.date}:
        </h3>
        <h3> Temperature(min): {temperature_2m_min}°F </h3>
        <h3> Temperature(max): {temperature_2m_max}°F</h3>
        <h3> Sunrise: {sunrise} </h3>
        <h3> Sunset: {sunset} </h3>
        <h3> Rain: {rain_sum ? ` ${rain_sum}%` : "No Available Data"} </h3>
        <h3> Snow: {snowfall_sum ? ` ${snowfall_sum}%` : "No Available Data"} </h3>
        <h3> Wind Speed: {windspeed_10m_max} mph </h3>
        <h3>

          Wind Direction: 
          {winddirection_10m_dominant
            ? ` ${winddirection_10m_dominant}°`
            : "No Available Data"}
        </h3>
      </>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No Weather to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return props.pastWeather ? loaded() : loading();
}
