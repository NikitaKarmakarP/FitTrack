import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>FitTrack Dashboard</h1>
      <ul>
        <li>Home</li>
        <li>Workout Tracker</li>
        <li>Meal Plan</li>
        <li>Achievements</li>
      </ul>
    </nav>
  );
}

export default Navbar;
