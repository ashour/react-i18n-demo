import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'

import routes from '../routes'
import Localizer from './Localizer'
import DeepRoute from '../components/DeepRoute'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

class App extends Component {
    render() {
        return (
            <div style={{paddingTop: "80px"}}>
                <Router>
                    <Localizer>
                        {this.props.uiTranslationsLoaded &&
                            <div>
                                <AppNavbar />

                                <div className="container">
                                    <main id="main" role="main">
                                        <Switch>
                                            {routes.map((route, index) => (
                                                <DeepRoute
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
                        }
                    </Localizer>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    locale: state.l10n.locale,
    uiTranslationsLoaded: state.l10n.uiTranslationsLoaded
})

export default connect(mapStateToProps)(App)
