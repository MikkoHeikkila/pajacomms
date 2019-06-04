import React, { Component } from "react"
import Navigation from "./Navigation/Navigation"
import Container from "./Container/Container"

import Logo from "../images/paja_logo.svg"
import Hamburger from "./Hamburger/Hamburger";

class Header extends Component {

    render() {

        return(

            <header>
                <Container>
                    <div id="header-content">
                        <a id="header-logo-container" href="/"><Logo id="logo-header" /></a>
                        <Navigation />
                        <Hamburger />
                    </div>
                </Container>
            </header>

        );
    }
}

export default Header