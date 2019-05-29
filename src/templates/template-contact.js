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

            <form name="contact" method="POST" data-netlify="true">
                <p class="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <p>
                    <label>Nimi: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Sähköposti: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Aihe: <select name="role[]" multiple>
                        <option value="esimerkki-1">Esimerkki 1</option>
                        <option value="esimerkkki-2">Esimerkki 2</option>
                    </select></label>
                </p>
                <p>
                    <label>Viesti: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Lähetä</button>
                </p>
            </form>

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