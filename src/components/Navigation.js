import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby"

export default () => (
    
    <nav>

        <StaticQuery
        query={graphql`
        query {
            allWordpressWpApiMenusMenusItems{
                edges{
                    node{
                        name
                        items {
                            wordpress_id
                            order
                            title
                            object_slug
                        }
                    }
                }
            }
        }`
        }
        
        render={data => (

        <ul>

            <li><AniLink paintDrip to="/" hex="#ed8d34">Etusivu</AniLink></li>

            {data.allWordpressWpApiMenusMenusItems.edges.map(({ node }) => (

                <li key="{node.order}">
                    <AniLink paintDrip to="/{node.items.object_slug}/" hex="#ed8d34">{node.items.title}</AniLink>
                </li>

            ))}

        </ul>
        
        )}
        />

    </nav>

)