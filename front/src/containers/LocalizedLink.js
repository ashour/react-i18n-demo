import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import { prefixPath } from '../services/util'

class LocalizedLink extends Component {
    render() {
        const { to, locale, className, children } = this.props

        return (
            <Link
                className={className}
                to={prefixPath(to, locale)}
            >
                {children}
            </Link>
        )
    }
}

export default connect(
    state => ({ locale: state.l10n.locale })
)(LocalizedLink)
