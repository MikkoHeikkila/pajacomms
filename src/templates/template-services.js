import React, { Component } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Container from "../components/Container/Container"
import Layout from "../components/Layout";

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

            <div class="flex-container">
                {currentPage.acf.palvelut.map(palvelu => (
                   <div>
                        <h3>{palvelu.otsikko}</h3>
                        <div dangerouslySetInnerHTML={{ __html: palvelu.teksti}} />
                   </div>
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
        content
        acf{
            palvelut{
                otsikko
                teksti
            } 
        }
      }
    }
`