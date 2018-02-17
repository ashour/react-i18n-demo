import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap'

import {
    addMovie,
    fetchMovies,
    setNewMovieTranslation,
} from '../actions'
import SelectDirector from './SelectDirector'
import SetFeatured from './SetFeatured'
import SetPublishedOn from './SetPublishedOn'
import MovieTranslationForm from '../components/MovieTranslationForm'

class AddMovie extends Component {
    constructor(props) {
        super(props)

        this.state = { added: false }
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    _onChange(value, locale) {
        this.props.setNewMovieTranslation(value, locale)
    }

    _onAdd() {
        this.props.addMovie()

        this.setState({ added: true })
    }

    render() {
        return (
            <div>
                {this.state.added &&
                    <Redirect to="/movies" />
                }

                {!this.state.added &&
                    <div>
                        <h2>Add Movie</h2>

                        <hr />

                        <Row>
                            <Col xs={12} md={4}>
                                <SelectDirector />
                            </Col>

                            <Col xs={12} md={4}>
                                <SetFeatured />
                            </Col>

                            <Col xs={12} md={4}>
                                <SetPublishedOn /> 
                            </Col>
                        </Row>

                        <h4>Translations</h4>

                        <MovieTranslationForm 
                            locale="ar"
                            localeName="Arabic"
                            titleValue={this.props.translations.ar.title}
                            synposisValue={this.props.translations.ar.synposis}
                            onChangeValue={value => this._onChange(value, 'ar')}
                        />

                        <MovieTranslationForm 
                            locale="en"
                            localeName="English"
                            titleValue={this.props.translations.en.title}
                            synposisValue={this.props.translations.en.synposis}
                            onChangeValue={value => this._onChange(value, 'en')}
                        />

                        <MovieTranslationForm 
                            locale="fr"
                            localeName="French"
                            titleValue={this.props.translations.fr.title}
                            synposisValue={this.props.translations.fr.synposis}
                            onChangeValue={value => this._onChange(value, 'fr')}
                        />

                        <Row className="justify-content-end">
                            <Col sm={4} lg={3}>
                                <Button
                                    color="primary"
                                    className="btn-block"
                                    onClick={() => this._onAdd()}
                                >
                                    Add
                                </Button>
                            </Col>
                        </Row>
                    </div>
                }
            </div>
        )
    }
}

export default connect(
    state => ({ translations: state.movies.enteredMovieTranslations}),
    {
        addMovie,
        fetchMovies,
        setNewMovieTranslation,
    }
)(AddMovie)
