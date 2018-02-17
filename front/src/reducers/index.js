import { combineReducers } from 'redux'

import l10n from './l10n'
import movies from './movies'
import quotes from './quotes'
import directors from './directors'

const movieApp = combineReducers({
    l10n,
    movies,
    quotes,
    directors,
})

export default movieApp