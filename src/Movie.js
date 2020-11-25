import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

// state가 필요없다면 class component 대신 function component를 생성해도 된다.
function Movie({year, title, summary, poster, genres}) {
    return (
       
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movies_movie">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres"> 
                {genres.map((genre, index) => 
                    <li className="movie__genre" key={index}> {genre}</li>)}
            </ul>
            <p className="movie__summary">{summary}</p>

        </div>
    </div>
    );
};

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;