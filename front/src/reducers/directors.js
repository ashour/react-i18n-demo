const INITIAL_STATE = {
    directors: [],
    featured: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_DIRECTORS':
            return {
                ...state,
                directors: action.directors,
                featured: action.directors.filter(d => d.is_featured),
            }

        default:
            return state
    }
}