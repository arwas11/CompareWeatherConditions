import "./form.css";
import { useState } from "react";
import CurrentWeather from "./currentWeather/CurrentWeather";
import PastWeather from "./pastWeather/PastWeather";


export default function Form(props) {
  console.log("this is searchterm before assigning state", props.searchTerm);

  const [formData, setFormData] = useState({ searchTerm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to citySearch prop, which is apps getWeather function
    props.citySearch(formData.searchTerm);
    // console.log("this is citysearch", props.citySearch)
  };

  console.log("this is formdata state after assignage", formData);

  return (
    <div className="sections-container">
      <div className="city-search">
        <label> Enter City: </label>
        {/* ONHOVER w/ Icon: You can also enter city and country code seperated by comma. Example: New York, US */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchTerm"
            onChange={handleChange}
            value={formData.searchTerm}
          />
          <input type="submit" value="submit" />
        </form>
        <CurrentWeather currentWeather={props.currentWeather} />
      </div>
      <div className="date-search">
        <form>
          <label> Enter Start Date: </label>
          <input
            type="date"
            // placeholder="City Or City, Country Code"
            name="start-date"
            // value={""}
            className="start-date"
          />
          <label> Enter End Date: </label>
          <input type="date" name="end-date" className="end-date" />
          {/* value={""} */}
          <input type="submit" value="submit" />
        </form>
        <PastWeather />
      </div>
    </div>
  );
}
