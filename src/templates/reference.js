import React, { Component } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Layout from "../components/Layout"

class ReferenceTemplate extends Component {

  render() {

    const post = this.props.data.wordpressWpReference
    const resolutions = post.featured_media.localFile.childImageSharp.resolutions

    return (

        <Layout>

          <Helmet>          
            <meta charSet="utf-8" />
            <title>{post.title} - Pajacomms</title>                 
          </Helmet>

          <Img resolutions={resolutions} />
          
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
        </Layout>

    )
  }
}

export default ReferenceTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpReference(id: { eq: $id }) {
      title
      content
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
`