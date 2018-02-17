import React from 'react'
import { Redirect } from 'react-router-dom'

import Home from './components/Home'
import Movies from './containers/Movies'
import { defaultLocale } from './config/i18n'
import SingleMovie from './containers/SingleMovie'
import { localizeRoutes } from './services/i18n/util'

const routes = [
    {
        path: "/",
        exact: true,
        localize: false,
        component: () => <Redirect to={`/${defaultLocale}`} />
    },
    {
        path: "/movies/:id",
        component: SingleMovie
    },
    {
        path: "/movies",
        component: Movies
    },
    {
        path: "/",
        component: Home
    }
]

export default localizeRoutes(routes)
