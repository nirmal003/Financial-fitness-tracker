import React from "react";
import logo from "../logo.png";

export const Header = () => {
  return (
    <h2 className="text-center">
      <img src={logo} alt="logo" className="vertial-align-bottom " />
      Financial Fitness Tracker
    </h2>
  );
};
