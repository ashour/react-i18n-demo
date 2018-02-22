import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { locales } from '../config/i18n'
import { setUiLocale } from '../services/i18n'
import { switchHtmlLocale, getLocaleFromPath } from '../services/i18n/util'
import { changeLocale, setUiTranslationsLoaded, setUiTranslationsLoading } from '../actions'

class Localizer extends Component {
    constructor(props) {
        super(props)

        this.setLocale(getLocaleFromPath(this.props.location.pathname), true)

        this.props.history.listen(location => {
            this.setLocale(getLocaleFromPath(location.pathname))
        })
    }

    /**
     * Set the lang and dir attributes in the <html> DOM element, and
     * initialize our i18n UI library.
     * 
     * @param {string} newLocale 
     * @param {bool} force 
     */
    setLocale(newLocale, force = false) {
        if (force || newLocale !== this.props.locale) {
            this.props.changeLocale(newLocale)

            switchHtmlLocale(
                newLocale,
                locales.find(l => l.code === newLocale).dir,
                { withRTL: ['/styles/vendor/GhalamborM/bootstrap-rtl.css'] }
            )

            this.props.setUiTranslationsLoading(true)

            setUiLocale(newLocale)
                .then(() => this.props.setUiTranslationsLoaded(true))
                .catch(() => this.props.setUiTranslationsLoaded(false))
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(
    connect(
        state => ({ locale: state.l10n.locale }),
        {
            changeLocale,
            setUiTranslationsLoaded,
            setUiTranslationsLoading,
        }
    )(Localizer)
)
