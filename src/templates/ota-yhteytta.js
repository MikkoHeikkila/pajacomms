import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"

class PageTemplate extends Component {

    render() {

      const currentPage = this.props.data.wordpressPage
  
      return (

        <Layout>
            <Container>
                <h1>Ota yhteyttä template</h1>
                <p dangerouslySetInnerHTML={{ __html: currentPage.slug }} />
                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
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
    }
  `