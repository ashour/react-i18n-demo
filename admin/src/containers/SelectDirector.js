import { connect } from 'react-redux'
import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

import { fetchDirectors, selectDirector } from '../actions'

class SelectDirector extends Component {
    componentDidMount() {
        this.props.fetchDirectors()
    }

    _onChange(e) {
        this.props.selectDirector(e.target.value)
    }

    render() {
        return (
            <FormGroup>
                <Label
                    for="director"
                    className="h4"
                >
                    Director
                </Label>
                
                <Input 
                    type="select"
                    id="director"
                    name="director"
                    value={this.props.selectedId}
                    onChange={e => this._onChange(e)}
                >
                    {this.props.directors.map(director => (
                        <option key={director.id} value={director.id}>
                            {director.name_en}
                        </option>
                    ))}
                </Input>
            </FormGroup>
        )
    }
}

export default connect(
    state => ({
        directors: state.directors.directors,
        selectedId: state.movies.selectedDirectorId,
    }), 
    {
        fetchDirectors,
        selectDirector
    }
)(SelectDirector)
