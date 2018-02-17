import { connect } from 'react-redux'
import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

import { setPublishedOn } from '../actions'

class SetPublishedOn extends Component {
    render() {
        return (
            <FormGroup>
                <Label for="published_on" className="h4">Published on</Label>

                <Input
                    type="month"
                    id="published_on"
                    name="published_on"
                    value={this.props.publishedOn}
                    onChange={e => this.props.setPublishedOn(e.target.value)}
                />
            </FormGroup>
        )
    }
}

export default connect(
    state => ({ publishedOn: state.movies.enteredPublishedOn }),
    { setPublishedOn }
)(SetPublishedOn)
