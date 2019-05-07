import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import ReferencePreview from "../components/ReferencePreview";
import containerStyles from "./palvelut.module.css"
import Isotope from "isotope-layout/js/isotope";

const iso = new Isotope( '.grid', {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

class PageTemplate extends Component {

  constructor() {
    super();
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickTech = this.handleClickTech.bind(this);
    this.handleClickPersonal = this.handleClickPersonal.bind(this);
    this.state = {
      isClickedAll: true,
      isClickedTech: false,
      isClickedPersonal: false
    };
  }

  handleClickAll(e) {
    this.setState({
      isClickedAll: true,
      isClickedTech: false,
      isClickedPersonal: false
    });
  }

  handleClickTech(e) {
    this.setState({
      isClickedAll: false,
      isClickedTech: true,
      isClickedPersonal: false
    });
  }

  handleClickPersonal(e) {
    this.setState({
      isClickedAll: false,
      isClickedTech: false,
      isClickedPersonal: true
    });
  }
  

  render() {

    const post = this.props.data.wordpressPage

    return (

      <Layout>
          <Container>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              <div id={containerStyles.referencesContainer} className="grid">
                  {this.props.data.allWordpressWpReference.edges.map(({ node }, index) => (

                  <ReferencePreview id={node.id} categoryname={node.categories[0].name} categoryslug={node.categories[0].slug} title={node.title} slug={node.slug} excerpt={node.excerpt} image={node.featured_media.localFile.childImageSharp.resolutions} />
                
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
      slug
      content
      template
      date(formatString: "MMMM DD, YYYY")
    }
    allWordpressWpReference{
      edges{
        node{
          id
          title
          slug
          excerpt
          categories{
            name
            slug
          }
          featured_media{
            localFile{
              childImageSharp{
                resolutions(width:400, height:300){
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