import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
    Card,
    Form, 
    Button,
    CardBody,
    CardTitle,
} from 'reactstrap'

import { addDirector, setNewDirector } from '../actions'
import AddDirectorTranslation from '../components/AddDirectorTranslation'

class AddDirector extends Component {
    _updateTranslation(key, value) {
        this.props.setNewDirector({ [key]: value })
    }

    _addDirector(e) {
        const { name_ar, name_en, name_fr } = this.props

        if (name_ar && name_en && name_fr) {
            this.props.addDirector({ name_ar, name_en, name_fr })
        }
    }

    render() {
        return (
            <Card style={this.props.style}>
                <CardBody>
                    <CardTitle>Add Director with Name</CardTitle>

                    <Form inline>
                        <AddDirectorTranslation
                            dir="rtl"
                            name="name_ar"
                            label="Arabic"
                            value={this.props.name_ar}
                            onChange={value => this._updateTranslation("name_ar", value)}
                        />

                        <AddDirectorTranslation
                            name="name_en"
                            label="English"
                            value={this.props.name_en}
                            onChange={value => this._updateTranslation("name_en", value)}
                        />

                        <AddDirectorTranslation
                            name="name_fr"
                            label="French"
                            value={this.props.name_fr}
                            onChange={value => this._updateTranslation("name_fr", value)}
                        />

                        <Button onClick={() => this._addDirector()}>Add</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

export default connect(
    state => {
        const { name_ar, name_en, name_fr } = state.directors.newDirector
    
        return { name_ar, name_en, name_fr }
    },
    {
        addDirector,
        setNewDirector,
    }
)(AddDirector)
