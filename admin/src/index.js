import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './services/store'

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
