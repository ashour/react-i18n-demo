import { combineReducers } from 'redux'

import movies from './movies'
import directors from './directors'

const movieApp = combineReducers({
    movies,
    directors,
})

export default movieApp
