import "./form.css";
import { useState } from "react";
import CurrentWeather from "./currentWeather/CurrentWeather";
import PastWeather from "./pastWeather/PastWeather";

export default function Form(props) {
  // console.log("this is form props", props.searchTerm);
  // console.log("this is  props.lat", props.getPastWeather.lat);
  // console.log("this is searchterm before assigning state", props.searchTerm);

  const [formTextData, setFormTextData] = useState({ searchTerm: "" });

  const handleTextChange = (event) => {
    setFormTextData({
      ...formTextData,
      [event.target.name]: event.target.value,
    });
  };

  const handleTextSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to citySearch prop, which is apps getCuurentWeather function
    props.citySearch(formTextData.searchTerm);
    // console.log("this is citysearch", props.citySearch)
  };

  console.log("this is formtextdata state after assignage", formTextData);

  //Past Weather

  // console.log(
  //   "this is DateData before assigning state",
  //   props.getPastWeather.startDate
  // );
  // console.log(
  //   "this is EndDate before assigning state",
  //   props.getPastWeather.endDate
  // );
  // console.log(
  //   "this is latCoord before assigning state",
  //   props.getPastWeather.lat
  // );
  // console.log(
  //   "this is lonCoord before assigning state",
  //   props.getPastWeather.lon
  // );
  const [formStartDateData, setFormStartDateData] = useState({ startDate: "" });

  const [formEndDateData, setFormEndDateData] = useState({ endDate: "" });

  const [latCoord, setlatCoord] = useState({ latInfo: "" });

  const [lonCoord, setlonCoord] = useState({ lonInfo: "" });

  const handleDateChange = (event) => {
    setFormStartDateData({
      ...formStartDateData,
      [event.target.name]: event.target.value,
    });
    setFormEndDateData({
      ...formStartDateData,
      [event.target.name]: event.target.value,
    });
    console.log("this is end-date state", formEndDateData);

    if (props.currentWeather) {
      const currentWeatherLat = props.currentWeather.coord.lat;
      const currentWeatherLon = props.currentWeather.coord.lon;
      // console.log(
      //   "here props.lat if currentweather true",
      //   props.currentWeather.coord.lat
      // );
      // console.log(
      //   "here props.lon if currentweather true",
      //   props.currentWeather.coord.lon
      // );
      // console.log("this is lat from current Weather", currentWeatherLat);
      // console.log("this is lon from current Weather", currentWeatherLon);
      setlatCoord({
        ...latCoord,
        latInfo: currentWeatherLat,
      });
      setlonCoord({
        ...lonCoord,
        lonInfo: Math.abs(currentWeatherLon),
      });
      // console.log("this is lat after assigning to past weather lat", latCoord);
      // console.log("this is lon after assigning to past weather lon", lonCoord);
    }
  };

  const handleDateSubmit = (event) => {
    event.preventDefault();

    // if (props.currentWeather.coord) {

    props.getPastWeather(
      latCoord.latInfo,
      lonCoord.lonInfo,
      formStartDateData.startDate,
      formStartDateData.startDate
    );
    // props.getPastWeather(lonCoord.lonInfo);
    // }
  };
  // console.log("this is form props", props);
  // console.log(
  //   "this is formStartDateData before assigning state",
  //   formStartDateData
  // );
  // console.log(
  //   "this is formEndDateData before assigning state",
  //   formEndDateData
  // );
  // console.log("this is latCoord before assigning state", latCoord);
  // console.log("this is lonCoord before assigning state", lonCoord);

 

  return (
    <div className="sections-container">
      <div className="city-search">
        <label> Enter City: </label>
        {/* ONHOVER w/ Icon: You can also enter city and country code separated by comma. Example: New York, US */}
        <form onSubmit={handleTextSubmit}>
          <input
            type="text"
            name="searchTerm"
            placeholder="City or City, Country-Code"
            onChange={handleTextChange}
            value={formTextData.searchTerm}
          />
          <input type="submit" value="submit" />
        </form>
        <CurrentWeather currentWeather={props.currentWeather} />
      </div>

      <div className="date-search">
        <form onSubmit={handleDateSubmit}>
          <label> Enter Start Date: </label>
          <input
            type="date"
            name="startDate"
            min="1990-01-01"
            max="2023-04-20"
            // value={""}
            onChange={handleDateChange}
            className="start-date"
          />

          <input type="submit" value="submit" />
        </form>
        <PastWeather
          pastWeather={props.pastWeather}
          currentWeather={props.currentWeather}
          date={formStartDateData.startDate}
        />
      </div>
    </div>
  );
}
