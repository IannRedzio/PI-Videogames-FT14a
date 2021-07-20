import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="background">
      <div className="title">
        <h2>Henry Videogames!</h2>
        <Link to="/home">
        <button type="submit">Enter</button>
        </Link>
      </div>
    </div>
  );
}