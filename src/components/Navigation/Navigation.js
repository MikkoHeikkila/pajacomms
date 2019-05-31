import React from "react"
//import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby"

export default () => (
    
    <div id="main-nav-container">
        
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
                /*
                <ul>
                    <li><Link to="/">{node.items[0].title}</Link></li>
                    <li><Link to="/palvelut/">{node.items[1].title}</Link></li>
                    <li><Link to="/ihmiset/">{node.items[2].title}</Link></li>
                    <li><Link to="/meille-toihin/">{node.items[3].title}</Link></li>
                    <li><Link to="/ota-yhteytta/">{node.items[4].title}</Link></li>
                </ul>
                */
               
               <ul>
                    <li><a href="/palvelut/">{node.items[0].title}</a></li>
                    <li><a href="/referenssit/">{node.items[1].title}</a></li>
                    <li><a href="/tiimi/">{node.items[2].title}</a></li>
                    <li><a href="/ota-yhteytta/">{node.items[3].title}</a></li>
                    {/* <li><a href="/ota-yhteytta/">{node.items[4].title}</a></li> */}
                </ul>

            ))}

        </nav>
        
        )}
        />

    </div>
    
)