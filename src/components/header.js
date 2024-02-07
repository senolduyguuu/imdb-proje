import React from "react";
import { NavLink } from "react-router-dom";
import imgLogo from "../img/IMDB_Logo_2016.svg.png";
import "../style/header.css";

const HeaderTop = () => {
  return (
    <nav className="navbar">
      <NavLink to={"/"} className="navbar-logo">
        <div className="HeaderTop-Nav-img">
          <img src={imgLogo} alt={imgLogo} />
        </div>
      </NavLink>
      <div className="navbar-content">
        <NavLink to={"/movies/popular"} className="navbar-link">
          Popular
        </NavLink>
        <NavLink to={"/movies/toprated"} className="navbar-link">
          Top Rated
        </NavLink>
        <NavLink to={"/movies/upcoming"} className="navbar-link">
          Upcoming
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderTop;
