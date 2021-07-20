import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByGenre,
  orderByCreator,
  orderAsc,
  orderDesc,
} from "../../actions/index";
import useGenres from "../../customHooks/useGenres";
import "./Filter.css";

export function Filter({ paginate }) {
    const dispatch = useDispatch();
    const genres = useGenres();

    const handleFilter = (e) => {
        dispatch(filterByGenre(e.target.value));
        paginate(e, 1);
    };

    const handleOrder = (e) => {
        if(e.target.value === "asc_name" || e.target.value === "asc_rating") {
            dispatch(orderAsc(e.target.value));
        } else if(e.target.value === "desc_name" || e.target.value === "desc_rating") {
            dispatch(orderDesc(e.target.value));
        } else {
            dispatch(filterByGenre(e.target.value));
        }
    };

    const handleCreator = (e) => {
        if(e.target.value === "API" || e.target.value === "CREATED") {
            dispatch(orderByCreator(e.target.value));
            paginate(e, 1);
        } else {
            dispatch(filterByGenre(e.target.value));
            paginate(e, 1);
        }
    };

    
    return (
        <div className="filter">
            <div>
                <div>Filter by Genre</div>
                <select onChange={(e) => handleFilter(e)}>
                    <option default>All</option>
                    {genres.map((g, i) => (<option value={g.name} key={i}>{g.name}</option>))}
                </select>
            </div>
            <div>
                <div>Order</div>
                <select onChange={(e) => handleOrder(e)}>
                <option value="All" default>All</option>
                <option value="asc_name">Alphabetically (A-Z)</option>
                <option value="desc_name">Alphabetically (Z-A)</option>
                <option value="asc_rating">Rating (Lower-Higher)</option>
                <option value="desc_rating">Rating (Higher-Lower)</option>
                </select>
            </div>
            <div>
                <div>Filter by Creator</div>
                <select onChange={(e) => handleCreator(e)}>
                    <option default>All</option>
                    <option value="API">Videogames of API</option>
                    <option value="CREATED">Videogames created</option>
                </select>
            </div>
        </div>
    );

}

export default Filter;