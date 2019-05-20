import React, { Component } from "react"
import { graphql } from "gatsby"

import Container from "../components/Container/Container"
import Layout from "../components/Layout";

class PageTemplate extends Component {

  render() {

    const currentPage = this.props.data.wordpressPage

    return (

        <Layout>
          <Container>
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
        content
        polylang_current_lang
        polylang_translations{
          slug
        }
      }
    }
  `