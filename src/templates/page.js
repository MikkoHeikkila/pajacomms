import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"

class PageTemplate extends Component {

    render() {

      const currentPage = this.props.data.wordpressPage
      const context = this.props.pageContext
  
      return (

        <Layout enSlug={currentPage.polylang_translations[0].slug} fiSlug={currentPage.polylang_translations[1].slug}>
            <Container>
                <p>Current id: {context.id}</p>
                <p>Current language: {context.lang}</p>
                <p>Eng version: {currentPage.polylang_translations[0].slug}</p>
                <p>Fin version: {currentPage.polylang_translations[1].slug}</p>
                <p>Page language: {currentPage.polylang_current_lang}</p>
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