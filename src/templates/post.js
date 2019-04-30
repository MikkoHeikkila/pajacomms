import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"

class PostTemplate extends Component {
    
  render() {

    const post = this.props.data.wordpressPost

    return (

        <Layout>
            <Container>
                <h1>{post.title}</h1>
            </Container>
        </Layout>

    )
  }
}



export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
    }
  }
`