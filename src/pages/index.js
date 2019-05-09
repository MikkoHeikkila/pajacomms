import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"

import Superman from "../components/animations/Superman"

export default ({ data }) => {


    return(

        <Layout>
            <Container>

                <h1>Kaikki sivut:</h1>

                <Superman />
                
                <ul>
                    {data.allWordpressPage.edges.map(({ node }, index) => (     
                        <li key="{node.guid}">
                            <Link to={node.slug}>{node.title}</Link>
                        </li>
                    ))}
                </ul>

                <h1>Kaikki artikkelit:</h1>
                
                <ul>
                    {data.allWordpressPost.edges.map(({ node }, index) => (     
                        <li key="{node.guid}">
                            <Link to={node.slug}>{node.title}</Link>
                        </li>
                    ))}
                </ul>

                <h1>Kaikki referenssit:</h1>
                
                <ul>
                    {data.allWordpressWpReference.edges.map(({ node }, index) => (
                        <li key="{node.guid}">
                            <Link to={'/palvelut/' + String(node.slug)}>{node.title}</Link>
                        </li>
                    ))}
                </ul>

            </Container>
        </Layout>

    ) 

}

export const query = graphql`  
    query {
        allWordpressPage {
            edges {
                node {
                id
                guid
                status
                title
                slug
                content
                template
                menu_order
                }
            }
        } 
        allWordpressPost {
            edges {
                node {
                id
                guid
                status
                title
                slug
                content
                }
            }
        } 
        allWordpressWpReference {
            edges {
                node {
                title
                id
                type
                slug
                }
            }
        }
    }
`