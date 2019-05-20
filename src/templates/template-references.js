import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReferencePreview from "../components/ReferencePreview/ReferencePreview";
import containerStyles from "./palvelut.module.css"

class PageTemplate extends Component {

  render() {

    const post = this.props.data.wordpressPage

    return (

      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div id={containerStyles.referencesContainer} className="grid">
          {this.props.data.allWordpressWpReference.edges.map(({ node }, index) => (
            <ReferencePreview id={node.id} categoryname={node.categories[0].name} categoryslug={node.categories[0].slug} title={node.title} slug={node.slug} excerpt={node.excerpt} image={node.featured_media.localFile.childImageSharp.resolutions} />
          ))}    
        </div>  
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
                resolutions(width:400, height:200){
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