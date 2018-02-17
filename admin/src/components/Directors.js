import React from 'react'

import AddDirector from '../containers/AddDirector'
import DirectorList from '../containers/DirectorList'

export default () => (
    <div>
        <h2 style={{marginBottom: "20px"}}>Directors</h2>

        <AddDirector style={{marginBottom: "20px"}}/>

        <DirectorList />
    </div>
)