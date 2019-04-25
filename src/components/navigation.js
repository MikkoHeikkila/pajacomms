import React from "react"
import { Link } from "gatsby"

const NavItem = props => (
    <Link
        activeClassName="active"
        partiallyActive={true}
        to={props.pageLink}
        >
        {props.pageName}
    </Link>   
)

export default () => (
    
    <nav>
        <ul>
            <li><Link activeClassName="active" to="/">Etusivu</Link></li>
            <li><NavItem pageLink="/~hungrydemo/demo/pajacommswp/palvelut/" pageName="Palvelut" /></li>
            <li><NavItem pageLink="/~hungrydemo/demo/pajacommswp/ihmiset/" pageName="Ihmiset" /></li>
            <li><NavItem pageLink="/~hungrydemo/demo/pajacommswp/meille-toihin/" pageName="Meille töihin" /></li>
            <li><NavItem pageLink="/~hungrydemo/demo/pajacommswp/ota-yhteytta/" pageName="Ota yhteyttä" /></li>
        </ul>
    </nav>

)