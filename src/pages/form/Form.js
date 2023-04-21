import "./form.css";
import { useState } from "react";
import CurrentWeather from "./currentWeather/CurrentWeather";
import PastWeather from "./pastWeather/PastWeather";
// import moment from "moment";
import subDays from "date-fns/subDays";
import toDate from "date-fns/toDate";
import Nav from "../../components/Nav";
import "../../components/nav.css";

export default function Form(props) {
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
  };

  console.log("this is formtextdata state after assignage", formTextData);

  //Past Weather

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
      setlatCoord({
        ...latCoord,
        latInfo: currentWeatherLat,
      });
      setlonCoord({
        ...lonCoord,
        lonInfo: Math.abs(currentWeatherLon),
      });
    }
  };

  const handleDateSubmit = (event) => {
    event.preventDefault();

    props.getPastWeather(
      latCoord.latInfo,
      lonCoord.lonInfo,
      formStartDateData.startDate,
      formStartDateData.startDate
    );
  };

  //MAKING Date input start 5 days prior
  // called on the current weather sunrise unix time/date and multiplied it by 1000 to get current/present unix day/time and assigned it a var
  //converted the var using date-fns package to specific date-fns format
  // then called on the date-fns substract function
  // slice the date and assign it to date input min attribute
  const sunriseUnix = props.currentWeather && props.currentWeather.sys.sunrise;
  const todayDate = sunriseUnix ? sunriseUnix : `not calculated yet`;
  const date2 = toDate(todayDate * 1000);

  console.log("this is todaysdate", todayDate);
  console.log("this is date2", date2);
  const fiveDaysPrior = subDays(date2, 5);
  console.log("five day diff", fiveDaysPrior);
  // { sunriseUnix && fiveDaysPrior}

  return (
    <>
      <Nav />
      <div className="sections-container">
        <div className="city-search">
          <label> Enter City: </label>
          <form onSubmit={handleTextSubmit} className="city-form">
            <input
              type="text"
              name="searchTerm"
              placeholder="City or City, Country-Code"
              onChange={handleTextChange}
              value={formTextData.searchTerm}
              className="text-input"
            />
            <br></br>
            <input type="submit" value="submit" className="submit-btn" />
          </form>
          <CurrentWeather currentWeather={props.currentWeather} />
        </div>

        <div className="date-search">
          <label>
            
            Enter Date To Compare:
            <br></br>
            <i className="date-note">
              Hint - go back farther than 5 days from today
            </i>
          </label>
          <form onSubmit={handleDateSubmit} className="date-form">
            <input
              type="date"
              name="startDate"
              min="1940-01-01"
              max="2023-04-20"
              required
              pattern="\d{4}-\d{2}-\d{2}"
              // placeholder="YYYY-MM-DD"
              onChange={handleDateChange}
              className="start-date"
            />
            <br></br>
            <input type="submit" value="submit" className="submit-btn" />
          </form>
          <PastWeather
            pastWeather={props.pastWeather}
            currentWeather={props.currentWeather}
            date={formStartDateData.startDate}
          />
        </div>
      </div>
    </>
  );
}
