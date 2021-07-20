import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById } from "../../actions/index";
import Error from "../../components/Error/Error";
import "./VideogameDetail.css";

function VideoGameDetail({ id }) {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogameById);

  useEffect(() => {
    dispatch(getVideogameById(id));
  },[dispatch, id]); 

  return (
    <div className="detailsContainer">
      <div className="information1">
        <div className="imageDetail1">
          {!videogame.image ? (<Error> image ={"noimage"} </Error>) : 
          (<img src={videogame.image} alt={videogame.name} />)} 
          <div className="derabajo1">
            <h1>{videogame.name}</h1>
            <h4>{videogame.released}</h4>
          </div>
        </div>
        <div className="details1">
          <div className="description1">
            <h2>About this game:</h2>
            <p>{videogame.description}</p>
          </div>
          <div className="genres">
            <h3>
              It is a {videogame.genres} game ranked at {videogame.rating}{" "}
              points.
            </h3>
          </div>
          <div className="platforms">
            <p>You can play it on {videogame.platforms}.</p>
          </div>
        </div>
      </div>
      <Link to="/home">
        <button className="return" type="submit">
          Return
        </button>
      </Link>
    </div>
  );
}

export default VideoGameDetail;
