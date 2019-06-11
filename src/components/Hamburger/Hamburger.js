import React, { Component } from "react"

function toggleNavigation(){
    document.getElementById("nav-button").classList.toggle("is-active");
    document.getElementById("mobile-nav-container").classList.toggle("active");
 }

class Hamburger extends Component {

    render() {

        return (

            <button id="nav-button" className="hamburger hamburger--spin" type="button" onClick={toggleNavigation}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>

        )
    }
}

export default Hamburger