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
            <li><NavItem pageLink="/palvelut/" pageName="Palvelut" /></li>
            <li><NavItem pageLink="/ihmiset/" pageName="Ihmiset" /></li>
            <li><NavItem pageLink="/meille-toihin/" pageName="Meille töihin" /></li>
            <li><NavItem pageLink="/ota-yhteytta/" pageName="Ota yhteyttä" /></li>
        </ul>
    </nav>

)

/*
export default () => (

    <nav>
        <ul>

            <StaticQuery query={graphql`      
                query {        
                    allWordpressPage {
                        edges {
                            node {
                            title
                            slug
                            }
                        }
                    }      
                }    
                `}
                render={data => (      

                    {data.allWordpressPage.edges.map(({ node }, index) => (

                        <li>
                            <NavItem pageLink="/{node.slug}/" pageName="{node.title}" />
                        </li>

                    ))}
                    
                )}
            />

        </ul>
    </nav>

)
*/