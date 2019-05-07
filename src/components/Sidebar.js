import React from "react"
import Navigation from "./Navigation"

function toggleNavigation(){
   document.getElementById("nav-button").classList.toggle("is-active");
   document.getElementById("sidebar").classList.toggle("active");
}

export default () => (

    <aside id="sidebar">

        <Navigation />

        <div id="sidebar--always-visible">
            <button id="nav-button" className="hamburger hamburger--spin" type="button" onClick={toggleNavigation}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>

    </aside>

)