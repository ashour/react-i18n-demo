import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
    Card,
    Form, 
    Label,
    Input,
    Button,
    CardBody,
    CardTitle,
    FormGroup,
} from 'reactstrap'

import { addDirector, setNewDirector } from '../actions'

class AddDirector extends Component {
    _onChange(e) {
        this.props.setNewDirector({
            [e.target.name]: e.target.value
        })
    }

    _onClick(e) {
        const { name_ar, name_en, name_fr } = this.props

        if (name_ar && name_en && name_fr) {
            this.props.addDirector({ name_ar, name_en, name_fr })
        }
    }

    render() {
        return (
            <Card style={this.props.style}>
                <CardBody>
                    <CardTitle>Add Director</CardTitle>

                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="name_ar" className="mr-sm-2">Name (Arabic)</Label>
                            
                            <Input
                                type="text" name="name_ar" id="name_ar"
                                value={this.props.name_ar}
                                dir="rtl"
                                onChange={e => this._onChange(e)}
                            />
                        </FormGroup>

                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="name_en" className="mr-sm-2">Name (English)</Label>
                            
                            <Input
                                type="text" name="name_en" id="name_en"
                                value={this.props.name_en}
                                onChange={e => this._onChange(e)}
                            />
                        </FormGroup>

                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="name_fr" className="mr-sm-2">Name (French)</Label>
                            
                            <Input
                                type="text" name="name_fr" id="name_fr"
                                value={this.props.name_fr}
                                onChange={e => this._onChange(e)}
                            />
                        </FormGroup>

                        <Button onClick={() => this._onClick()}>Add</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const { name_ar, name_en, name_fr } = state.directors.newDirector

    return { name_ar, name_en, name_fr }
}

const mapDispatchToProps = {
    addDirector,
    setNewDirector,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDirector)
