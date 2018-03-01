import React from 'react'
import { Navbar, Nav } from 'reactstrap'

export default () => (
    <Navbar light color="light" className="mt-5">
        <Nav className="m-auto">
            <p className="navbar-text small">
                This demo was made by <a href="https://ashour.ca">Mohammad Ashour</a> with
                {' '}<a href="https://reactjs.org/">React</a> and is released under the
                {' '}<a href="https://github.com/ashour/react-i18n-demo/blob/master/LICENSE">MIT license</a>.
                {' '}It was made for a{' '}
                    <a href="https://phraseapp.com/blog/posts/react-i18n-app/">
                        PhraseApp blog article.
                    </a>
                {' '}Images and synopses are copyright of their respective owners, and were
                {' '}acquired from the IMDB and the Dubai Film Festival websites.
            </p>
        </Nav>
    </Navbar>
)