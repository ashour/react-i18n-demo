import _ from 'lodash'

const INITIAL_STATE = {
    movies: [],
    lastId: 0,
    selectedDirector: {
        id: 0,
        name: '',
    },
    enteredPublishedOn: '',
    enteredIsFeatured: false,
    enteredMovieTranslations: {
        ar: {
            title: '',
            synposis: '',
        },
        en: {
            title: '',
            synposis: '',
        },
        fr: {
            title: '',
            synposis: '',
        }
    }
}

const movies = (state = INITIAL_STATE, action) => {
    let lastId, movies = {}

    switch(action.type) {
        case 'ADD_MOVIES': 
            movies = _.unionBy(action.movies, state.movies, 'id')

            return {
                ...state,
                movies,
                lastId: _.maxBy(movies, 'id').id
            }

        case 'SELECT_DIRECTOR':
            return {
                ...state,
                selectedDirector: {
                    id: action.id,
                    name: action.name
                }
            }

        case 'SET_IS_FEATURED':
            return {
                ...state,
                    enteredIsFeatured: action.isFeatured
            }

        case 'SET_PUBLISHED_ON':
            return {
                ...state,
                enteredPublishedOn: action.publishedOn
            }

        case 'SET_NEW_MOVIE_TRANSLATION':
            return {
                ...state,
                enteredMovieTranslations: {
                    ...state.enteredMovieTranslations,
                    [action.locale]: {
                        ...state.enteredMovieTranslations[action.locale],
                        ...action.translation
                    }
                }
            }

        case 'ADD_MOVIE':
            lastId = state.lastId + 1
            movies = _.unionBy(
                [{
                    id: lastId,
                    director: state.selectedDirector,
                    is_featured: state.enteredIsFeatured,
                    published_on: state.enteredPublishedOn,
                    title_ar: state.enteredMovieTranslations['ar'].title,
                    title_en: state.enteredMovieTranslations['en'].title,
                    title_fr: state.enteredMovieTranslations['fr'].title,
                }],
                state.movies,
                'id'
            )

            return {
                ...state, 
                movies,
                lastId,
                enteredIsFeatured: INITIAL_STATE.enteredIsFeatured,
                enteredPublishedOn: INITIAL_STATE.enteredPublishedOn,
                selectedDirector: { ...INITIAL_STATE.selectedDirector },
                enteredMovieTranslations: INITIAL_STATE.enteredMovieTranslations,
            }

        default:
            return state
    }
}

export default movies
