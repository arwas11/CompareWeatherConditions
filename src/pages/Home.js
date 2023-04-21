import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
export default function Home() {
  const unLink = `https://www.un.org/sustainabledevelopment/climate-change/#:~:text=Facts%20and%20figures-,In%202021%2C%20the%20global%20mean%20temperature%20was%20about%201.1%C2%B0,of%20the%20next%20five%20years.`;
  return (
    <div className="intro">
      <p className="intro-p1">
        <a href="unLink" className="un-link">
          <i>Climate Action</i>
        </a>{" "}
        is the 13th Sustainable Development Goal. It urges us to take actions to
        combat climate change and its impact on our planet.
        <br></br>
        <br></br>
        In 2021, the global mean temperature was about 1.1°C above the
        pre-industrial level (from 1850 to 1900). The years from 2015 to 2021
        were the seven warmest on record. The global annual mean temperature is
        projected to rise beyond 1.5°C above pre-industrial levels in at least
        one of the next five years.
        <br></br>
      </p>
      <p className="intro-p2">
        This app allows you to compare today's weather conditions in a specific
        city to the weather conditions in the same city in the past.
      </p>
      <Link to="/form">
        <button className="enter-btn">ENTER</button>
      </Link>
    </div>
  );
}
