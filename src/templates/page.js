import React, { Component } from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import Container from "../components/Container"

class PageTemplate extends Component {

    render() {

      const currentPage = this.props.data.wordpressPage
      const context = this.props.pageContext
  
      return (

        <div id="wrapper">
          <Sidebar currentLang={context.lang} engSlug={currentPage.polylang_translations[0].slug} finSlug={currentPage.polylang_translations[1].slug} />
          <main>
            <Header />
              <Container>

                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
                
              </Container>
            <Footer />
          </main>
        </div>

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