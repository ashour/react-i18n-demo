import React from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default () => (
    <Row className="justify-content-center">
        <Col sm="10" md="7" lg="5" xl="4">
            <h2>Welcome!</h2>

            <Card>
                <CardHeader tag="h3" className="h4">
                    Manage
                </CardHeader>

                <ListGroup flush>
                    <ListGroupItem>
                        <Link to="/directors">Directors</Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/movies">Movies</Link>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Row>
)
