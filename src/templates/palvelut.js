import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"
import ReferencePreview from "../components/ReferencePreview";
import containerStyles from "./palvelut.module.css"

class PageTemplate extends Component {

  render() {

    const currentPage = this.props.data.wordpressPage

    return (

      <Layout>
          <Container>

              <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
              <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
 
              <div id={containerStyles.referencesContainer} className="flex-container">
                {this.props.data.allWordpressWpReference.edges.map(({ node }, index) => (
                  <ReferencePreview title={node.title} slug={node.slug} excerpt={node.excerpt} wpid={node.wordpress_id}/>
                ))}              
              </div>  

          </Container>
      </Layout>

    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      slug
      content
      template
      date(formatString: "MMMM DD, YYYY")
    }
    allWordpressWpReference {
      edges {
        node {
        title
        slug
        excerpt
        wordpress_id
        }
      }
    }
  }
`