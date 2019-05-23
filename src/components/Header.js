import React, { Component } from "react"
import Navigation from "./Navigation/Navigation";

class Header extends Component {

    constructor() {
        super();
    }

    render() {

        return(

            <header>
            
                <h1>Paja</h1>

                <Navigation />

            </header>

        );
    }
}

export default Header