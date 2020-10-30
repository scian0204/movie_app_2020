import React from 'react'
import PropTypes from 'prop-types'

function Movie({id, title, year, summary, poster}) {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;