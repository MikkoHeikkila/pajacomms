import React, { Component } from "react"
import Navigation from "../Navigation/Navigation"
import { Link } from "gatsby";
import LinkedInIcon from "../images/linkedin.svg";
import sidebarStyles from "./Sidebar.module.css"

function toggleNavigation(){
   document.getElementById("nav-button").classList.toggle("is-active");
   document.getElementById("sidebar").classList.toggle("active");
}

class Sidebar extends Component {

    render() {

        return (

            <aside id="sidebar" class={sidebarStyles.sidebarContainer}>

                <Navigation currentLang={this.props.currentLang} />

                <div id="sidebar--always-visible">

                    <button id="nav-button" className="hamburger hamburger--spin" type="button" onClick={toggleNavigation}>
                        <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                        </span>
                    </button>

                    <ul id="lang-switcher" className="hide-md">
                        <li><Link to={this.props.engSlug}>EN</Link></li>
                        <li><Link to={this.props.finSlug}>FI</Link></li>
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