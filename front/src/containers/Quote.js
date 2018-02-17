import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

import { t } from '../services/i18n'
import { fetchQuote } from '../actions'

class Quote extends Component {
    componentDidMount() {
        this.props.fetchQuote()
    }

    render() {
        const { quote } = this.props

        return (
            <Row
                style={{ marginTop: "20px", marginBottom: "20px" }}
                className="justify-content-md-center"
            >
                <Col sm={12} md={8} xl={6}>
                    <Card>
                        <CardHeader>{t('quote_of_the_day')}</CardHeader>
                        
                        <CardBody>
                            <blockquote className="blockquote mb-0">
                                <p>{quote.quote}</p>

                                <footer className="blockquote-footer">
                                    <cite>{quote.film}</cite>
                                    {' '}
                                    {t('quote_year', { date: quote.year })}
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default connect(
    state => ({ quote: state.quotes.quote }),
    { fetchQuote }
)(Quote)
