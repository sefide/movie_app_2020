import React from "react";
import PropTypes from "prop-types";

// state가 필요없다면 class component 대신 function component를 생성해도 된다.
function Movie(id, year, title, summary, poster) {
    return <div>
        <h5>{title}</h5>
    </div>
}

Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;