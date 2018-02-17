import _ from 'lodash'

export const setNewDirector = ({ name_ar, name_en, name_fr }) => ({
    type: 'SET_NEW_DIRECTOR_NAME',
    name_ar,
    name_en,
    name_fr, 
})

export const fetchDirectors = () => dispatch => (
    fetch('/api/directors.json')
        .then(response => response.json())
        .then(directors => dispatch(addDirectors(directors)))
        .catch(err => console.error(err))
)

export const addDirectors = directors => ({
    type: 'ADD_DIRECTORS',
    directors
})

export const addDirector = ({ name_ar, name_en, name_fr }) => ({
    type: 'ADD_DIRECTOR',
    name_ar,
    name_en,
    name_fr,
})

export const fetchMovies = () => dispatch => (
    fetch('/api/movies.json')
        .then(response => response.json())
        .then(movies => dispatch(addMovies(movies)))
        .catch(err => console.log(err))
)

export const addMovies = movies => ({
    type: 'ADD_MOVIES',
    movies
})

export const selectDirector = id => (dispatch, getState) => {
    dispatch({
        type: 'SELECT_DIRECTOR',
        id,
        name: _.find(getState().directors.directors, { id: parseInt(id, 10) }).name_en
    })
}

export const setIsFeatured = isFeatured => ({
    type: 'SET_IS_FEATURED',
    isFeatured,
})

export const setPublishedOn = publishedOn => ({
    type: 'SET_PUBLISHED_ON',
    publishedOn,
})

export const setNewMovieTranslation = (translation, locale) => ({
    type: 'SET_NEW_MOVIE_TRANSLATION',
    translation,
    locale,
})

export const addMovie = () => ({
    type: 'ADD_MOVIE',
})