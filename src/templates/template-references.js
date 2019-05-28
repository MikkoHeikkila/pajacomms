import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReferencePreview from "../components/ReferencePreview/ReferencePreview";
import styles from "./template-references.module.css"
import classNames from 'classnames'
import Masonry from 'react-masonry-component';

const masonryOptions = {
  columnWidth: 1
};

class PageTemplate extends Component {
  constructor() {

    super();

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      isClickedAll: true,
      isClickedvalmennukset: false,
      isClickedtyoyhteisoviestinta: false,
      isClickedmuutosviestinta: false,
      isClickedmediaviestinta: false,
      isClickedsisallotjajulkaisut: false,
      isClickedviestintapalveluna: false,
      isClickedmediacommunication: false
    };
  }

  handleClick(target){
    this.setState({
      isClickedAll: false,
      isClickedvalmennukset: false,
      isClickedtyoyhteisoviestinta: false,
      isClickedmuutosviestinta: false,
      isClickedmediaviestinta: false,
      isClickedsisallotjajulkaisut: false,
      isClickedviestintapalveluna: false,
      isClickedmediacommunication: false
    });
    this.setState({ [target]: true });
  }

  componentDidMount(){

  }

  render() {

    const post = this.props.data.wordpressPage

    return (

      <Layout>

        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

        <div dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className={styles.filtersButtonGroup}>

            <button
            onClick={(e) => this.handleClick('isClickedAll')}
              className={
                this.state.isClickedAll
                  ? classNames(styles.filtersButton, styles.isChecked)
                  : classNames(styles.filtersButton)
              }
            >
              <div className={styles.btnCircleContainer}>
                <div className={styles.btnCircle}>
                    <div></div>
                </div>
              </div>
              Kaikki
            </button>

            {this.props.data.allWordpressCategory.edges.map(({ node }, index) => (
              <button
              onClick={(e) => this.handleClick('isClicked' + node.slug)}
              className={
                this.state['isClicked' + node.slug]
                  ? classNames(styles.filtersButton, styles.isChecked)
                  : classNames(styles.filtersButton)
                }
              >
              <div className={styles.btnCircleContainer}>
                <div className={styles.btnCircle}>
                    <div></div>
                </div>
              </div>
              {node.name}
              </button>
            ))}
            
          </div>

          <div>
            {this.props.data.allWordpressCategory.edges.map(({ node }, index) => (
              <div className={
                ((this.state["isClicked" + node.slug]))
                  ? classNames()
                  : classNames("hidden")
                }>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </div>
            ))}          
          </div>

          <Masonry
          elementType={'div'}
          options={masonryOptions}
          >
            {this.props.data.allWordpressWpReference.edges.map(({ node }, index) => (
                <div className={
                  ((this.state["isClicked" + node.categories[0].slug]) || (this.state["isClickedAll"]))
                    ? classNames(styles.singleReferenceContainer, node.categories[0].slug, styles.active,)
                    : classNames(styles.singleReferenceContainer, node.categories[0].slug)
                  }>
                  <ReferencePreview
                    id={node.id} 
                    categoryname={node.categories[0].name} 
                    categoryslug={node.categories[0].slug} 
                    title={node.title} 
                    slug={node.slug} 
                    image={node.featured_media.localFile.childImageSharp.resolutions}
                  />            
                </div>
            ))}
          </Masonry>

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
    allWordpressCategory(    
      filter: {
        parent_element: {name: {eq: "fi"}}
      }
      ){
      edges{
        node{
          id
          name
          slug
          description
          parent_element{
            name
          }
        }
      }
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