import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"

export default ({ data }) => {

    console.log(data)

    return(

        <Layout>
            <Container>

                <h1>Kaikki sivut:</h1>
                
                <ul>
                    {data.allWordpressPage.edges.map(({ node }, index) => (     
                        <li key="{node.guid}">
                            <h4>Title: {node.title}</h4>
                            <p>ID: {node.id}</p>
                            <p>GUID: {node.guid}</p>
                            <p>STATUS: {node.status}</p>
                            <p>SLUG: {node.slug}</p>
                            <p>CONTENT: {node.content}</p>
                            <p>TEMPLATE: {node.template}</p>
                            <p>MENU ORDER: {node.menu_order}</p>
                        </li>
                    ))}
                </ul>

                <p>Yrityksen muutto, uusi organisaatio, yritysosto,
                työtapojen muutos tai yt:t. Meiltä saat apua
                viestinnän suunnitteluun ja tekemiseen.</p>

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
    }
`