import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Nav,
    Navbar,
    NavItem,
    Collapse,
    DropdownMenu,
    NavbarToggler,
    DropdownToggle,
    UncontrolledDropdown,
} from 'reactstrap'

import logo from '../logo.svg'
import { t } from '../services/i18n'
import { locales } from '../config/i18n'
import LocalizedLink from '../containers/LocalizedLink'

class AppNavbar extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpen: false }
    }

    toggle() {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() { 
        return (
            <Navbar fixed="top" color="light" light expand="md">
                <LocalizedLink to="/" className="navbar-brand">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt={t('app_name')}
                    />
                    {t('app_name')}
                </LocalizedLink>

                <NavbarToggler onClick={() => this.toggle()} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <span className="navbar-text small d-inline-block pr-4">
                        — {t('a_react_demo')}
                    </span>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <LocalizedLink to="/movies" className="nav-link">
                                {t('movies')}
                            </LocalizedLink>
                        </NavItem>
                    </Nav>

                    <Nav className="ml-auto" navbar>
                         <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <span
                                    role="img"
                                    aria-label="globe"
                                    className="globe-icon" 
                                >
                                    🌐
                                </span>

                                {t('language')}
                            </DropdownToggle>

                            <DropdownMenu right>
                                {locales.map(locale => (
                                    <Link
                                        key={locale.code}
                                        to={`/${locale.code}`}
                                        className="dropdown-item"
                                    >
                                        {locale.name}
                                    </Link>
                                ))}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default AppNavbar
