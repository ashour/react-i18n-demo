import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'

import routes from '../routes'
import DeepRoute from '../components/DeepRoute'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import SwitchLocaleOnHistoryChange from '../components/SwitchLocaleOnHistoryChange'

class App extends Component {
    render() {
        return (
            <div style={{paddingTop: "80px"}}>
                <Router>
                    <SwitchLocaleOnHistoryChange>
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
                    </SwitchLocaleOnHistoryChange>
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
