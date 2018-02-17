import { connect } from 'react-redux'
import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

import { setIsFeatured } from '../actions'

class SetFeatured extends Component {
    render() {
        return (
            <div style={{ marginBottom: "10px" }}>            
                <h4>Featured</h4>

                <FormGroup check>
                    <Label check>
                        <Input
                            type="checkbox"
                            id="is_featured"
                            name="is_featured"
                            value={this.props.isFeatured}
                            onChange={e => this.props.setIsFeatured(e.target.checked)}
                        />
                        Yes
                    </Label>
                </FormGroup>
            </div>
        )
    }
}

export default connect(
    state => ({ isFeatured: state.movies.enteredIsFeatured }),
    { setIsFeatured }
)(SetFeatured)
