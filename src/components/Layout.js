import React from "react"
import Header from "./Header"
import Container from "./Container/Container"
import Footer from "./Footer"
import GlobalStyles from "../styles/createGlobalStyle"

export default ({children}) => (

    <div id="wrapper">

        <GlobalStyles />
        
        <main>

            <Header />

              <Container>

                {children}

              </Container>

            <Footer />

        </main> 

    </div>

)

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