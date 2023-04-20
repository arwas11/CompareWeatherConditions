export default function CurrentWeather(props) {
  console.log("this is currentweather state", props.currentWeather);

  try {
    const loaded = () => {
      const { name, wind, rain, snow, main, sys } =
        props.currentWeather;
      const icon = props.currentWeather.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      const sunriseToUTC = new Date(sys.sunrise).toLocaleTimeString("en-US");
      const sunsetToUTC = new Date(sys.sunset).toLocaleTimeString("en-US");

      // showing all AM time!! need fixing
      // const options = {
      //   hour: "numeric",
      //   minute: "numeric",
      //   second: "numeric",
      //   timeZone: props.pastWeather && props.pastWeather.timezone,
      //   timeZoneName: "short",
      // };
      // const sunriseToUTC = new Intl.DateTimeFormat("en-AU", options).format(sys.sunrise)
      // console.log("this is time", sunriseToUTC);

      // const sunsetToUTC = new Intl.DateTimeFormat("en-AU", options).format(sys.sunset)
      // console.log("this is time", sunsetToUTC);
      return (
        <>
          Current weather data
          <h3>
            <i>City & Country Code</i>: {name}, {sys.country}
          </h3>
          <h3>
            Weather Description:{" "}
            <i>{props.currentWeather.weather[0].description}</i>
            <img src={iconUrl} alt="an icon describing the state of weather" />
          </h3>
          {/* add date now and correct time */}
          <h3> Sunrise: {sunriseToUTC} </h3>
          <h3> Sunset: {sunsetToUTC} </h3>
          <h3> Current Temperature: {main.temp}°F </h3>
          <h3> Feels Like: {main.feels_like}°F </h3>
          {/* <h3> Today's Temperature(min): {main.temp_min}</h3>
          <h3> Today's Temperature(max): {main.temp_max}</h3> */}
          {/* api data is mm, need to make % */}
          <h3> Rain : {rain ? rain : "No Rain For The Last 3 Hours"} </h3>
          <h3> Snow: {snow ? snow : "No Snow For The Last 3 Hours"} </h3>
          {/* <h3> Humidity: {main.humidity}% </h3>  */}
          <h3> Wind Speed: {wind.speed} mph </h3>
          <h3> Wind Direction: {wind.deg}° </h3>
        </>
      );
    };

    //function to return loading JSX
    const loading = () => {
      return <h1>No Weather to Display</h1>;
    };

    //Ternary operator will determine which functions JSX we will return
    return props.currentWeather ? loaded() : loading();
  } catch (err) {
    console.error(err);
  }
}
