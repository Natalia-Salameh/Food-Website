import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import icon from "./hungry.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div>
        <h2>Natalia Salameh</h2>
      </div>
      <h2 className="text-link">
        <Link to="/">Hungry</Link>
        <img src={icon} className="icon" alt="Hungry" />
      </h2>
    </div>
  );
};

export default NavBar;
