import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"

class ReferenceTemplate extends Component {

  render() {

    const post = this.props.data.wordpressWpReference

    return (

        <Layout>
            <Container>
                <h1>{post.title}</h1>
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
    }
  }
`