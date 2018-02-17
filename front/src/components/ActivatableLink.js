import React from 'react'
import { Route, Link } from 'react-router-dom'

export default ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
            let className = 'nav-link'
            if (match) {
                className += ' active'
            }

            return (
                <Link
                    to={to}
                    className={className}>
                        {label}
                </Link>
            )
        }}
    />
)