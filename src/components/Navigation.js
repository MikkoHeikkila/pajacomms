import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby"

export default () => (
    
    <nav>
        
        <StaticQuery
        query={graphql`
        query {
            allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main"}}){
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

                <li>{node.items.title}</li>
                
            ))}

        </ul>
        
        )}
        />

    </nav>
    
)