import { connect } from 'react-redux'
import { CardDeck } from 'reactstrap'
import React, { Component } from 'react'

import { t } from '../services/i18n'
import { fetchMovies } from '../actions'
import FeaturedMovie from '../components/FeaturedMovie'

class FeaturedMovies extends Component {
    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        return (
            <div>
                <h2>{t('featured_movies')}</h2>

                <CardDeck>
                    {this.props.movies.map(movie => (
                        <FeaturedMovie key={movie.id} movie={movie} />
                    ))}
                </CardDeck>
            </div>
        )
    }
}

export default connect(
    state => ({ movies: state.movies.featured }),
    { fetchMovies }
)(FeaturedMovies)
