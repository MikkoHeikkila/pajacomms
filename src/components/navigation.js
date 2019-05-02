import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () => (
    
    <nav>
        <ul>
            <li><AniLink paintDrip to="/" hex="#ed8d34">Etusivu (normal)</AniLink></li>
            <li><AniLink paintDrip to="/palvelut/" hex="#ed8d34">Palvelut (Paint)</AniLink></li>
            <li><AniLink paintDrip to="/ihmiset/" hex="#ed8d34">Ihmiset (Fade)</AniLink></li>
            <li><AniLink paintDrip to="/meille-toihin/" hex="#ed8d34">Meille töihin (swipe)</AniLink></li>
            <li><AniLink paintDrip to="/ota-yhteytta/" hex="#ed8d34">Ota yhteyttä (cover)</AniLink></li>
        </ul>
    </nav>

)