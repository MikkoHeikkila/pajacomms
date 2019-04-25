import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"

export default ({ data }) => {

    console.log(data)

    return(

        <Layout>
            <Container>

                <h1>Kaikki tiedostot:</h1>
  
                <table>   

                    <thead>            
                        <tr>              
                            <th>File type</th>              
                            <th>Name</th>              
                            <th>Directory</th>                         
                        </tr>          
                    </thead>  

                    <tbody>            
                    {data.allFile.edges.map(({ node }, index) => (              
                        <tr key={index}>                
                            <td>{node.extension}</td>                
                            <td>{node.name}</td>                
                            <td>{node.dir}</td>                          
                        </tr>            
                        ))}          
                    </tbody>

                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <div key={node.id}>
                            <h3>
                            {node.frontmatter.title}{" "}
                            <span>
                                — {node.frontmatter.date}
                            </span>
                            </h3>
                            <p>{node.excerpt}</p>        
                        </div>                
                    ))}

                </table>

            </Container>
        </Layout>

    ) 

}

export const query = graphql`  
    {
        allFile {
            edges {
                node {
                    extension,
                    name,
                    dir
                }
            }
        }
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title,
                        date
                    }
                    id,
                    parent {
                        id
                    },
                    children {
                        id
                    },
                    internal {
                        content,
                        description,
                        ignoreType,
                        mediaType
                    },
                    excerpt,
                    rawMarkdownBody,
                    fileAbsolutePath,
                    fileAbsolutePath,
                    html
                }
            }
        }
    }
`