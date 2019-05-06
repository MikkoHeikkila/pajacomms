import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"

class ReferenceTemplate extends Component {

  render() {

    const post = this.props.data.wordpressWpReference

    return (

        <Layout>
            <Container>
                <h1>{post.title}</h1>

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </Container>
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
      acf{
        featured_image {
          wordpress_id
          title
          filename
          filesize
          url
          link
          alt
          author
          description
          caption
          name
          status
          uploaded_to
          date
          modified
          menu_order
          mime_type
          type
          subtype
          icon
          width
          height
        }
      }     
    }
  }
`