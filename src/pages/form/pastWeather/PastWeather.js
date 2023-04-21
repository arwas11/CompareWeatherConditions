import React from "react";
import moment from "moment";
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

    // slicing the temperature parma to display only whole number
    // Couldn't just slice the param bc the date is an integer, I used toString() then sliced it
    //thought of using math.floor/ceil but it will change the data given by rounding the num
    const pastTempMin = temperature_2m_min.toString();
    console.log("this is current feels like temp", pastTempMin);
    const pastTempMax = temperature_2m_max.toString();
    console.log("this is current temp", pastTempMax);

    //API request comes as an element in an array, I reached the element index and sliced the time info I needed
    // console.log('this is sunrise length',  sunrise[0].length)
    // console.log('this is sunrise', sunrise)
    const slicedSunrise = sunrise[0].slice(11, 16);
    const slicedSunset = sunset[0].slice(11, 16);
    // console.log("this is sliced sunrise",slicedSunrise)
    // sunset

    return (
      <div className="past-results">
        {/* •	Date fixing: to US format */}
        <h3>
          {props.currentWeather.name} weather on{" "}
          {moment(props.date).format("MMM Do YYYY")}:
        </h3>
        <h3> Temperature(min): {pastTempMin.slice(0, 2)}°F </h3>
        <h3> Temperature(max): {pastTempMax.slice(0, 2)}°F</h3>
        <h3> Sunrise: {slicedSunrise} AM </h3>
        <h3> Sunset: {slicedSunset} PM </h3>
        <h3> Rain: {rain_sum ? ` ${rain_sum}%` : "No Available Data"} </h3>
        <h3>
          {" "}
          Snow: {snowfall_sum ? ` ${snowfall_sum}%` : "No Available Data"}{" "}
        </h3>
        <h3> Wind Speed: {windspeed_10m_max} mph </h3>
        <h3>
          Wind Direction:
          {winddirection_10m_dominant
            ? ` ${winddirection_10m_dominant}°`
            : "No Available Data"}
        </h3>
      </div>
    );
  };

  const loading = () => {
    return <br></br>;
  };

  return props.pastWeather ? loaded() : loading();
}
