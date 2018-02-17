const INITIAL_STATE = {
    movies: [],
    featured: [],
    currentMovie: null,
}

const movies = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_MOVIES': 
            return {
                ...state,
                movies: [...action.movies],
                featured: action.movies.filter(m => m.is_featured)
            }

        case 'SET_CURRENT_MOVIE':
            return {
                ...state,
                currentMovie: state.movies.find(m => m.id === parseInt(action.id, 10))
            }

        default:
            return state
    }
}

export default movies