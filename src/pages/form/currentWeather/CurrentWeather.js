import moment from "moment";

export default function CurrentWeather(props) {
  console.log("this is currentweather state", props.currentWeather);

  try {
    const loaded = () => {
      const { name, wind, rain, snow, main, sys } = props.currentWeather;
      const icon = props.currentWeather.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      const sunrise = sys.sunrise;
      const sunset = sys.sunset;

      // Slicing the temperature parma to display only whole number
      // Couldn't just slice the param bc the date is an integer, I used toString() then sliced it
      //thought of using math.floor/ceil but it will change the data given by rounding the num
      const currentTemp = main.temp.toString();
      console.log("this is current temp", currentTemp);
      const currentFeelsLikeTemp = main.feels_like.toString();
      console.log("this is current feels like temp", currentFeelsLikeTemp);

      // converted unix time to current unix date/time using Date() constructor by multiplying by 1000
      // converted the output unix time to string time using .toString() to get
      // then sliced the output to get HH:MM
      //Sunrise
      const sunriseTime = new Date(sunrise * 1000);
      const currentSunriseConverted = sunriseTime.toString();
      const currentSunriseSliced = currentSunriseConverted.slice(16, 21);

      //Sunset
      const sunsetTime = new Date(sunset * 1000);
      const currentSunsetConverted = sunsetTime.toString();
      const currentSunsetSliced = currentSunsetConverted.slice(16, 21);

      return (
        <div className="current-results">
          <h3>
            City & Country Code: {name}, {sys.country}
          </h3>
          <h3>
            Weather Description:{" "}
            {props.currentWeather.weather[0].description}
            {/* <img src={iconUrl} alt="an icon describing the state of weather" /> */}
          </h3>
          <h3> Sunrise: {currentSunriseSliced} AM </h3>
          <h3> Sunset: {currentSunsetSliced} PM </h3>
          <h3> Current Temperature: {currentTemp.slice(0, 2)}°F </h3>
          <h3> Feels Like: {currentFeelsLikeTemp.slice(0, 2)}°F </h3>
          <h3> Rain: {rain ? `${rain} mm` : "no available data"} </h3>
          <h3> Snow: {snow ? `${snow} mm` : "no available data"} </h3>
          <h3> Wind Speed: {wind.speed} mph </h3>
          <h3> Wind Direction: {wind.deg}° </h3>
        </div>
      );
    };

    //function to return loading JSX
    const loading = () => {
      return <br></br>;
    };

    //Ternary operator will determine which functions JSX we will return
    return props.currentWeather ? loaded() : loading();
  } catch (err) {
    console.error(err);
  }
}
