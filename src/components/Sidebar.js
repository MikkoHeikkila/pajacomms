import React, { Component } from "react"
import Navigation from "./Navigation"
import { Link } from "gatsby";
import LinkedInIcon from "../images/linkedin.svg";

function toggleNavigation(){
   document.getElementById("nav-button").classList.toggle("is-active");
   document.getElementById("sidebar").classList.toggle("active");
}

class Sidebar extends Component {

    render() {

        return (

            <aside id="sidebar">

                <Navigation />

                <div id="sidebar--always-visible">

                    <button id="nav-button" className="hamburger hamburger--spin" type="button" onClick={toggleNavigation}>
                        <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                        </span>
                    </button>

                    <ul id="lang-switcher" className="hide-md">
                        <li><Link to="">EN {this.props.enSlug}</Link></li>
                        <li><Link to="">FI {this.props.fiSlug}</Link></li>
                    </ul>

                    <ul id="some-icons" className="hide-md">
                        <li><Link to="https://www.linkedin.com/"><LinkedInIcon /></Link></li>
                    </ul>

                </div>

            </aside>

        )
    }
}

export default Sidebar