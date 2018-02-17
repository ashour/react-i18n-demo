import { defaultLocale } from '../config/i18n'

const INITIAL_STATE = {
    locale: defaultLocale,
    uiTranslationsLoaded: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHANGE_LOCALE': 
            return {
                ...state,
                locale: action.locale
            }

        case 'SET_UI_TRANSLATIONS_LOADING':
            return  {
                ...state,
                uiTranslationsLoaded: false,
            }

        case 'SET_UI_TRANSLATIONS_LOADED':
            return  {
                ...state,
                uiTranslationsLoaded: action.isLoaded,
            }

        default:
            return state
    }
}