import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
export default function Home() {
  // const unLink = `https://www.un.org/sustainabledevelopment/climate-change/#:~:text=Facts%20and%20figures-,In%202021%2C%20the%20global%20mean%20temperature%20was%20about%201.1%C2%B0,of%20the%20next%20five%20years.`;
  return (
    <>
    <div className="intro">
      <p className="intro-p1">
        <a href="https://www.un.org/sustainabledevelopment/climate-change/#:~:text=Facts%20and%20figures-,In%202021%2C%20the%20global%20mean%20temperature%20was%20about%201.1%C2%B0,of%20the%20next%20five%20years" className="un-link">
          <i>Climate Action</i>
        </a>{" "}
        is one of the sustainable development goals set by the United Nations. It urges us to take actions to
        combat climate change and its impact on our planet.
        <br></br>
        <br></br>
        In 2021, the global mean temperature was about 33°F above the
        pre-industrial level (from 1850 to 1900). The global annual mean temperature is
        projected to rise beyond 34°F in the next five years.
        <br></br>
      </p>
      <p className="intro-p2">
        This app allows you to compare today's weather conditions in a specific
        city to the weather conditions in the same city in the past.
      </p>
    <div>
    <Link to="/form">
          <button className="enter-btn">ENTER</button>
        </Link>
    </div>
    </div>
    </>
  );
}
