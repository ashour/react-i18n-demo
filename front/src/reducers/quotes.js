const INITIAL_STATE = {
    quote: {
        id: 0,
        year: 0,
        film: '',
        quote: '',
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_QUOTE':
            return {
                ...state,
                quote: { ...action.quote }
            }

        default: 
            return state
    }
}