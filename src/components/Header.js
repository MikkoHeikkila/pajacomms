import React, { Component } from "react"
import Navigation from "./Navigation/Navigation"
import Container from "./Container/Container"

import Logo from "../images/paja_logo.svg"

class Header extends Component {

    render() {

        return(

            <header>
                <Container>
                    <div id="header-content">
                        <a href="/"><Logo id="logo-header" /></a>
                        <Navigation />
                    </div>
                </Container>
            </header>

        );
    }
}

export default Header