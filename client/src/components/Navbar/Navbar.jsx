import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    const [name, setName] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        setName("");
    }

    return(
        <div className="navBar">
            <div className="back">
                <Link to="/">
                    <h3>Back</h3>
                </Link>
            </div>
            <div className="home">
                <Link to="/home">
                    <h3>Home</h3>
                </Link>
            </div>
            <div className="searchBar">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Videogame..." type="text" />
                    <NavLink to={`/results/${name}`}>
                        <button name="search" type="submit">Search</button>
                    </NavLink>
                </form>
            </div>
            <div className="create">
                <Link to="/create">
                    <h3>Create</h3>
                </Link>
            </div>
            <div className="about">
                <Link to="/about">
                <h3>About</h3>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;