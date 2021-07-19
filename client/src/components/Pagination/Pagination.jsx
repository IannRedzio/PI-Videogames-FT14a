import React from "react";
import "./Pagination.css";

export const Pagination = ({ videogamesPerPage, totalVideogames, paginate }) => {
    const pages = [];
    const numberOfPages = Math.ceil(totalVideogames / videogamesPerPage)

    for(let i = 1; i <= numberOfPages; i++) {
        pages.push(i)
    }

    return(
        <nav className= "paginate">
            {pages.map((number) => (
                <div key={number} className="page">
                    <button onClick={(e) => paginate(e, number)}>
                        {number}
                    </button>
                </div>
            ))}
        </nav>
    )
}