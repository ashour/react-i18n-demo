import Home from './components/Home'
import Movies from './components/Movies'
import AddMovie from './containers/AddMovie'
import Directors from './components/Directors'

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/directors",
        component: Directors
    },
    {
        path: "/movies",
        exact: true,
        component: Movies
    },
    {
        path: "/movies/new",
        exact: true,
        component: AddMovie
    }
]

export default routes
