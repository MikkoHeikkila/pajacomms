import React, { Component } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Container from "../components/Container/Container"
import Layout from "../components/Layout";
//import BtnPrimary from "../components/BtnPrimary/BtnPrimary";
import Person from "../components/Person/Person";

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
                {currentPage.acf.people.map(person => (
                    <Person
                        image={person.kuva.localFile.childImageSharp.resolutions}
                        name={person.nimi} 
                        title={person.titteli} 
                        description={person.vapaa_tekstikentta}
                        phone={person.puhelinnumero}
                        email={person.sahkoposti}
                    />
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
          people{
            nimi
            titteli
            vapaa_tekstikentta
            puhelinnumero
            sahkoposti
            kuva {
              localFile {
                childImageSharp{
                  resolutions(width:300, height:300){
                    width
                    height
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
`