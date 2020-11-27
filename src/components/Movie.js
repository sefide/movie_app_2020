import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import "./Movie.css"

// state가 필요없다면 class component 대신 function component를 생성해도 된다.
function Movie({id, year, title, summary, poster, genres}) {
    return (

        <Link to={{
            pathname: `movie/${id}`,
            state: {
                year, // year: year
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movies_movie">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres"> 
                        {genres.map((genre, index) => 
                            <li className="movie__genre" key={index}> {genre}</li>)}
                    </ul>
                    <p className="movie__summary">{summary.length > 0 ? summary.slice(0, 300) : "no summary ".repeat(10)}...</p>

                </div>
            </div>
        </Link>
    
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