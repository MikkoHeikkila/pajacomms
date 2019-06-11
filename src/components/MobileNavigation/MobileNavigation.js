import React from "react"
//import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby"

export default () => (
    
    <div id="mobile-nav-container">
        
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

        render={ data => (

        <nav>
            
            {data.allWordpressWpApiMenusMenusItems.edges.map(({ node }) => (

               <ul>
                    <li><a href="/palvelut/">{node.items[0].title}</a></li>
                    <li><a href="/referenssit/">{node.items[1].title}</a></li>
                    <li><a href="/tiimi/">{node.items[2].title}</a></li>
                    <li><a href="/ota-yhteytta/">{node.items[3].title}</a></li>
                </ul>

            ))}

        </nav>
        
        )}
        />

    </div>
    
)