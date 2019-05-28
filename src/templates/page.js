import React, { Component } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Container from "../components/Container/Container"
import Layout from "../components/Layout";
import BtnPrimary from "../components/BtnPrimary/BtnPrimary";

class PageTemplate extends Component {

  render() {

    const currentPage = this.props.data.wordpressPage

    return (

        <Layout>

          <Helmet>          
            <meta charSet="utf-8" />
            <title>{currentPage.title} - Pajacomms</title>                 
          </Helmet>

          <Container>
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
            <BtnPrimary link="/palvelut/" text="Lue lisää" />
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