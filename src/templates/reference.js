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
    }
  }
`