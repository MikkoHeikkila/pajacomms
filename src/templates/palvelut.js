import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"

class PageTemplate extends Component {

    render() {

      const currentPage = this.props.data.wordpressPage
  
      return (

        <Layout>
            <Container>
                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
            </Container>
            <Container>
              <ul>
                {this.props.data.allWordpressWpReference.edges.map(({ node }, index) => (
                  <li key="{node.guid}">
                      <Link to={'/palvelut/' + String(node.slug)}>{node.title}</Link>
                  </li>
                ))}
              </ul>
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
          id
          type
          slug
          }
        }
      }
    }
  `