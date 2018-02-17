import React from 'react'
import { Card, CardImg, CardBody, CardText } from 'reactstrap'

import { t } from '../services/i18n'

export default ({ director }) => (
    <Card>
        <CardImg
            top
            src={director.image_url}
            alt={t('image_of_director', { director: director.name })}
        />

        <CardBody>
            <CardText
                tag="h4"
                className="text-center text-uppercase lead"
            >
                {director.name}
            </CardText>
        </CardBody>
    </Card>
)
