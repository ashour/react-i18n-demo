import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import React, { Component } from 'react'

import { t } from '../services/i18n'
import { findMovie } from '../actions'

class SingleMovie extends Component {
    componentDidMount() {
        this.props.findMovie(this.props.match.params.id)
    }

    render() {
        const { movie } = this.props

        return (
            <Row className="justify-content-center">
               {movie &&
                    <Col lg="8">
                        <h2>{movie.title}</h2>

                        <p className="lead">
                            {t('published_on_date_only', { date: new Date(movie.published_on) })}
                        </p>

                        <p>{t('directed_by', { director: movie.director.name })}</p>

                        {movie.synopsis.split("\n\n").map((para, i) => (
                            <p key={i} className="lead">{para}</p>
                        ))}

                        <img
                            alt={movie.title}
                            src={movie.image_url}
                            className="img-fluid rounded"
                        />
                    </Col>
                }
            </Row>
        )
    }
}

export default connect(
    state => ({ movie: state.movies.currentMovie }),
    { findMovie }
)(SingleMovie)
