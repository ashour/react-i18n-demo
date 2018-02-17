import React from 'react'
import {
    Col,
    Card,
    Label, 
    Input,
    CardHeader,
    CardBody,
    FormGroup,
} from 'reactstrap'

const getDir = locale => locale === 'ar' ? 'rtl' : 'ltr'

export default props => {
    const {
        locale,
        localeName,
        titleValue,
        onChangeValue,
        synposisValue,
    } = props

    return (
        <Card style={{marginBottom: "15px"}}>
            <CardHeader tag="h5">{localeName}</CardHeader>

            <CardBody>
                <FormGroup row>
                    <Label for={`title_${locale}`} sm={3}>Title</Label>

                    <Col sm={9}>
                        <Input
                            type="text"
                            value={titleValue}
                            dir={getDir(locale)}
                            id={`title_${locale}`}
                            name={`title_${locale}`}
                            onChange={e => onChangeValue({ title: e.target.value })}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Label for={`synposis_${locale}`}>Synopsis</Label>
                    
                    <Input
                        rows={5}
                        type="textarea"
                        dir={getDir(locale)}
                        value={synposisValue}
                        id={`synposis_${locale}`}
                        name={`synposis_${locale}`}
                        onChange={e => onChangeValue({ synposis: e.target.value })}
                    />
                </FormGroup>
            </CardBody>
        </Card>
    )
}
