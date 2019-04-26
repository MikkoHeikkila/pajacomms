import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () => (
    
    <nav>
        <ul>
            <li><AniLink to="/">Etusivu (normal)</AniLink></li>
            <li><AniLink paintDrip to="/palvelut/" hex="#ed8d34">Palvelut (Paint)</AniLink></li>
            <li><AniLink fade to="/ihmiset/" >Ihmiset (Fade)</AniLink></li>
            <li><AniLink swipe direction="left" to="/meille-toihin/">Meille töihin (swipe)</AniLink></li>
            <li><AniLink cover to="/ota-yhteytta/" bg="#ed8d34">Ota yhteyttä (cover)</AniLink></li>
        </ul>
    </nav>

)