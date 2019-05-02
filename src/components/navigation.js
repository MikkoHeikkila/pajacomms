import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () => (
    
    <nav>
        <ul>
            <li><AniLink paintDrip to="/" hex="#ed8d34">Etusivu</AniLink></li>
            <li><AniLink paintDrip to="/palvelut/" hex="#ed8d34">Palvelut</AniLink></li>
            <li><AniLink paintDrip to="/ihmiset/" hex="#ed8d34">Ihmiset</AniLink></li>
            <li><AniLink paintDrip to="/meille-toihin/" hex="#ed8d34">Meille töihin</AniLink></li>
            <li><AniLink paintDrip to="/ota-yhteytta/" hex="#ed8d34">Ota yhteyttä</AniLink></li>
        </ul>
    </nav>

)