import _ from 'lodash'

const INITIAL_STATE = {
    lastId: 0,
    directors: [],
    newDirector: {
        name_ar: '',
        name_en: '',
        name_fr: '',
    },
}

export default (state = INITIAL_STATE, action) => {
    let directors = [], lastId

    switch(action.type) {
        case 'SET_NEW_DIRECTOR_NAME':
            return {
                ...state,
                newDirector: {
                    name_ar: action.name_ar || state.newDirector.name_ar,
                    name_en: action.name_en || state.newDirector.name_en,
                    name_fr: action.name_fr || state.newDirector.name_fr,
                }
            }

        case 'ADD_DIRECTORS':
            directors = _.unionBy(action.directors, state.directors, 'id')
            lastId = _.maxBy(directors, 'id').id

            return {
                ...state,
                lastId,
                directors
            }
        
        case 'ADD_DIRECTOR':
            lastId = state.lastId + 1
            directors = [
                ...state.directors,
                {
                    id: lastId,
                    name_ar: action.name_ar,
                    name_en: action.name_en,
                    name_fr: action.name_fr,
                }
            ]

            return {
                ...state,
                lastId,
                directors,
                newDirector: {
                    name_ar: '',
                    name_en: '',
                    name_fr: '',
                },
            }

        default:
            return state
    }
}
