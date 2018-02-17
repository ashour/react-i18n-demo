export const changeLocale = (locale) => ({
    type: 'CHANGE_LOCALE',
    locale
})

export const setUiTranslationsLoading = () => ({
    type: 'SET_UI_TRANSLATIONS_LOADING'
})

export const setUiTranslationsLoaded = isLoaded => ({
    type: 'SET_UI_TRANSLATIONS_LOADED',
    isLoaded
})

export const fetchMovies = () => (dispatch, getState) => {
    const { locale }  = getState().l10n

    return fetch(`/api/${locale}/movies.json`)
                .then(response => response.json())
                .then(movies => dispatch(addMovies(movies)))
                .catch(err => console.error(err))
}

export const addMovies = movies => ({
    type: 'ADD_MOVIES',
    movies,
})

export const findMovie = id => (dispatch, getState) => {
    dispatch(fetchMovies())
        .then(() => dispatch(setCurrentMovie(id)))
}

export const setCurrentMovie = id => ({
    type: 'SET_CURRENT_MOVIE',
    id
})

export const fetchDirectors = () => (dispatch, getState) => {
    const { locale }  = getState().l10n

    return fetch(`/api/${locale}/directors.json`)
                .then(response => response.json())
                .then(directors => dispatch(addDirectors(directors)))
                .catch(err => console.error(err))
}

export const addDirectors= directors => ({
    type: 'ADD_DIRECTORS',
    directors,
})

export const fetchQuote = () => (dispatch, getState) => {
    const { locale }  = getState().l10n

    return fetch(`/api/${locale}/quotes/1.json`)
                .then(response => response.json())
                .then(quote => dispatch(addQuote(quote)))
                .catch(err => console.error(err))
}

export const addQuote= quote => ({
    type: 'ADD_QUOTE',
    quote,
})
