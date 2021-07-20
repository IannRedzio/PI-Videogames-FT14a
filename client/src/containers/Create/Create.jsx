import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createVideogame } from "../../actions/index";
import useGenres from "../../customHooks/useGenres";
import "./Create.css";

export default function Create() {
    const genres = useGenres();
    const dispatch = useDispatch();
    const randomPlatforms = ["PC", "iOS", "Android", "macOS",  "PlayStation 4", "PlayStation 5", "Xbox", "PS Vita", "PS2" , "PS1", "Sega", "Atari", "Wii", "Nintendo Switch"]

    const initialState = {
        name: "",
        description: "",
        image: "",
        released: "",
        rating: 0,
        genres: [],
        platforms: [],
    }

    const [game, setGame] = useState({ ...initialState });



    const ChangeInput = (e) => {
        if(e.target.name === "genres" || e.target.name === "platforms") {
            const aux = game[e.target.name];
            setGame({
                ...game,
                [e.target.name]: aux.concat(e.target.value),
            });
            console.log(aux, "aux", e.target.name, "name");
            console.log(game, "game")
        } else {
            setGame({
                ...game,
                [e.target.name]: e.target.value,
            });
        }
    };


    const handleSubmit = (e) => {
        console.log(game.image, "image")
        e.preventDefault();


        if(!game.name) {
            alert("You are forgetting the name.")
            return
        }
        if(!game.description) {
            alert("You are forgetting the description.")
            return
        }
        if(!game.released) {
            alert("You are forgetting the date.")
            return
        }
        if(game.rating > 5 || game.rating < 0) {
            alert("The rating should be between 0 and 5.")
            return
        }


        dispatch(createVideogame(game));
        e.target.reset();
        alert("Videogame created successfully!");
        /* dispatch(getVideogames()) */

        setGame({...initialState});
    };

    return (
        <div className="container">
            <h1>Post your Videogame.</h1>
            <form id="survey-form" className="form" noValidate onSubmit={(e) => handleSubmit(e)}>
                <div className="options">
                    <div className="titles">
                        <div>
                            <label>Name</label>
                            <input className="label" type="text" name="name" value={game.name}  onChange={ChangeInput}  />
                        </div>
                        <div>
                            <label>Description</label>
                            <input className="label" type="text" name="description" value={game.description} onChange={ChangeInput} />
                        </div>
                        <div>
                            <label>Rating</label>
                            <input className="label" type="number" name="rating" value={game.rating}  onChange={ChangeInput} />
                        </div>
                        <div>
                            <label>Released</label>
                            <input className="label" type="date" name="released" value={game.released}  onChange={ChangeInput} />
                        </div>
                    </div>
                </div>
                <div className="imageURL">
                    <label>Put the URL image</label>
                    <input className="imageLink" type="text" name="image" value={game.image} onChange={ChangeInput} />
                </div>
                <div className="checkbox">
                    <div className="checkboxs">
                        <label>Genres</label>
                        <div>
                            {genres.map((g) => (
                                <div key={g.name}>
                                    <input type="checkbox" name="genres" value={g.name} onChange={ChangeInput} /> 
                                    <label name={g}>{g.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="checkboxs">
                        <label>Platforms</label>
                        <div>
                            {randomPlatforms.map((p) => (
                                <div key={p}>
                                    <input type="checkbox" name="platforms" value={p}  onChange={ChangeInput} />
                                    <label name={p}>{p}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="button" type="submit">
                    Post
                </button>
            </form>
        </div>
    );
}