import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"


export const query = graphql`  
    query {    
        site {      
            siteMetadata {        
                title      
            }    
        } 
        allWordpressPage {
            edges {
                node {
                title
                slug
                }
            }
        } 
    }
`
export default ({ data }) => (

    <Layout>
        <Container>

            <h1>Valvottaako firmasi muutos?</h1>

            {data.allWordpressPage.edges.map(({ node }, index) => (              
                <tr key={index}>                
                    <td>{node.title}</td>                          
                </tr>            
            ))}

            <p>Yrityksen muutto, uusi organisaatio, yritysosto,
            työtapojen muutos tai yt:t. Meiltä saat apua
            viestinnän suunnitteluun ja tekemiseen.</p>

        </Container>
    </Layout>

)