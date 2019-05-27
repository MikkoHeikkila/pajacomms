import React, { Component } from "react"
import Navigation from "./Navigation/Navigation"

import Logo from "../images/paja_logo.svg"

class Header extends Component {

    render() {

        return(

            <header>
            
                <a href="/"><Logo id="main-logo" /></a>

                <Navigation />

            </header>

        );
    }
}

export default Header