import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

class PostTemplate extends Component {
    
  render() {

    const post = this.props.data.wordpressPost

    /*const resolutions = post.featured_media.localFile.childImageSharp.resolutions*/

    return (

        <Layout>
          {/*<Img resolutions={resolutions} />*/}
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Layout>

    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile{
          childImageSharp{
            resolutions(width:800, height:400) {
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