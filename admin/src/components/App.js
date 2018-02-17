import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import routes from '../routes'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

export default () => (
    <div style={{paddingTop: "80px"}}>
        <Router>
            <div>
                <AppNavbar />

                <div className="container">
                    <main id="main" role="main">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                        </Switch>
                    </main>
                </div>

                <AppFooter />
            </div>
        </Router>
    </div>
)
