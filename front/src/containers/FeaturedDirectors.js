import { connect } from 'react-redux'
import { CardDeck } from 'reactstrap'
import React, { Component } from 'react'

import { t } from '../services/i18n'
import { fetchDirectors } from '../actions'
import Director from '../components/Director'

class FeaturedDirectors extends Component {
    componentDidMount() {
        this.props.fetchDirectors()
    }

    render() {
        const { directors } = this.props

        return (
            <div>
                <h2>{t('featured_director', { count: directors.length })}</h2>

                <CardDeck>
                    {directors.map(director => (
                        <Director key={director.id} director={director} />
                    ))}
                </CardDeck>
            </div>
        )
    }
}

export default connect(
    state => ({ directors: state.directors.featured }), 
    { fetchDirectors }
)(FeaturedDirectors)
