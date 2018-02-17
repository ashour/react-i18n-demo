import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from '../reducers'

let composeEnhancers = null

if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
} else {
    composeEnhancers = compose
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store 
