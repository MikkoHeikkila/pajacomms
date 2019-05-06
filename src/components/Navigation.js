import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby"

export default () => (
    
    <div>
        
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

        <nav>

        

            {data.allWordpressWpApiMenusMenusItems.edges.map(({ node }) => (
                <ul>
                    {node.items.map((item) => {
                        return <li key={item.wordpress_id}><AniLink paintDrip to={item.object_slug} hex="#ed8d34">{item.title}</AniLink></li>
                    })}
                </ul>
            ))}

        </nav>
        
        )}
        />

    </div>
    
)