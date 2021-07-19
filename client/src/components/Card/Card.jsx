import React from "react";
import { Link } from "react-router-dom";
import Error from "../../components/Error/Error";
import "./Card.css";

function ShowCard({ data }) {
  return (
    <div className="cardContainer">
      <Link to={`/videogames/${data.id}`}>
        {data.image === null || !data.image ? (<Error image={"noimage"} />) : 
        ( <img className="image" src={data.image} alt={data.name} /> )}
      </Link>
      <div className="cardText">
        <div className="name">{data.name}</div>
        <div className="genres">{data.genres}</div>
      </div>
      <div className="rating">
        <h4>{data.rating}</h4>
      </div>
    </div>
  );
}

export default ShowCard;
