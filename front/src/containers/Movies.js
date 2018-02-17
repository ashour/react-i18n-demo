import { connect } from 'react-redux'
import React, { Component } from 'react'

import { t } from '../services/i18n'
import { fetchMovies } from '../actions'
import LocalizedLink from './LocalizedLink'

class Movies extends Component {
    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        return (
            <div>
                <h2>{t('movies')}</h2>

                {this.props.movies.map(movie => (
                    <LocalizedLink
                        key={movie.id}
                        to={`/movies/${movie.id}`}
                    >
                        <h3>{movie.title}</h3>
                    </LocalizedLink>
                ))}
            </div>
        )
    }
}

export default connect(
    state => ({ movies: state.movies.movies }),
    { fetchMovies }
)(Movies)
