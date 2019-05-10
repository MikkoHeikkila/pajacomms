import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby"

export default () => (
    
    <div id="sidebar--content">
        
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

                /*
                * This method gets the whole main menu.
                * It would be better, but AniLink transitions don't work with dynamically created links
                * Will hopefully fix at some point
                <ul>
                    {node.items.map((item) => {
                        return <li key={item.wordpress_id}><AniLink paintDrip to={item.object_slug} hex="#ed8d34">{item.title}</AniLink></li>
                    })}
                </ul> 
                */

                /*
                * Not as pretty, but this works. Gets front page + 4 nav items
                */

                <ul>
                    <li><AniLink paintDrip to="/" hex="#ed8d34">{node.items[0].title}</AniLink></li>
                    <li><AniLink paintDrip to="/palvelut/" hex="#ed8d34">{node.items[1].title}</AniLink></li>
                    <li><AniLink paintDrip to="/ihmiset/" hex="#ed8d34">{node.items[2].title}</AniLink></li>
                    <li><AniLink paintDrip to="/meille-toihin/" hex="#ed8d34">{node.items[3].title}</AniLink></li>
                    <li><AniLink paintDrip to="/ota-yhteytta/" hex="#ed8d34">{node.items[4].title}</AniLink></li>
                </ul>
                
            ))}

        </nav>
        
        )}
        />

    </div>
    
)