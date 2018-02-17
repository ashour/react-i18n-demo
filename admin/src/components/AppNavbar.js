import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Nav,
    Navbar,
    NavItem,
    Collapse,
    NavbarToggler,
} from 'reactstrap'

import logo from '../logo.svg'

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
            <Navbar fixed="top" color="dark" dark expand="md">
                <Link to="/" className="navbar-brand">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Admin"
                    />
                    μveez Admin
                </Link>

                <NavbarToggler onClick={() => this.toggle()} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <span className="navbar-text small d-inline-block pr-4">
                        — a React i18n demo
                    </span>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/directors" className="nav-link">Directors</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/movies" className="nav-link">Movies</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default AppNavbar
