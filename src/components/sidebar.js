import React from "react"
import Navigation from "../components/navigation"

function toggleNavigation(){
    console.log("click");
}

export default () => (

    <aside>

        <button className="hamburger" type="button" onClick={toggleNavigation}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
            </span>
        </button>

        <Navigation />

    </aside>

)