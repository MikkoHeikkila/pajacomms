import React, { Component } from "react"
import { graphql } from "gatsby"
import ReferencePreview from "../components/ReferencePreview/ReferencePreview";
import styles from "../templates/template-references.module.css"
import classNames from 'classnames'
import Masonry from 'react-masonry-component';

const masonryOptions = {
  columnWidth: 1
};

class PageTemplate extends Component {

  constructor() {

    super();

    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickvalmennukset = this.handleClickvalmennukset.bind(this);
    this.handleClicktyoyhteisoviestinta = this.handleClicktyoyhteisoviestinta.bind(this);
    this.handleClickmuutosviestinta = this.handleClickmuutosviestinta.bind(this);
    this.handleClickmediaviestinta = this.handleClickmediaviestinta.bind(this);
    
    this.state = {
      isClickedAll: true,
      isClickedvalmennukset: false,
      isClickedtyoyhteisoviestinta: false,
      isClickedmuutosviestinta: false,
      isClickedmediaviestinta: false
    };
  }
  
  handleClickAll(e) {
    this.setState({
      isClickedAll: true,
      isClickedvalmennukset: false,
      isClickedtyoyhteisoviestinta: false,
      isClickedmuutosviestinta: false,
      isClickedmediaviestinta: false
    });
  }

  handleClickvalmennukset(e) {
    this.setState({
      isClickedAll: false,
      isClickedvalmennukset: true,
      isClickedtyoyhteisoviestinta: false,
      isClickedmuutosviestinta: false,
      isClickedmediaviestinta: false
    });

  }

  handleClicktyoyhteisoviestinta(e) {
    this.setState({
      isClickedAll: false,
      isClickedvalmennukset: false,
      isClickedtyoyhteisoviestinta: true,
      isClickedmuutosviestinta: false,
      isClickedmediaviestinta: false
    });

  }

  handleClickmuutosviestinta(e) {
    this.setState({
      isClickedAll: false,
      isClickedvalmennukset: false,
      isClickedtyoyhteisoviestinta: false,
      isClickedmuutosviestinta: true,
      isClickedmediaviestinta: false
    });
  }

  handleClickmediaviestinta(e) {
    this.setState({
      isClickedAll: false,
      isClickedvalmennukset: false,
      isClickedtyoyhteisoviestinta: false,
      isClickedmuutosviestinta: false,
      isClickedmediaviestinta: true
    });
  }


  render() {

    return (

      <div className={styles.testContainer}>

        <div className={styles.filtersButtonGroup}>

          <button
            onClick={this.handleClickAll}
            className={
              this.state.isClickedAll
                ? classNames(styles.filtersButton, styles.isChecked)
                : classNames(styles.filtersButton)
            }
          >
            <div className={styles.btnCircle}>
              <div></div>
            </div>
            Kaikki
          </button>

          <button
            onClick={this.handleClickvalmennukset}
            className={
              this.state.isClickedvalmennukset
                ? classNames(styles.filtersButton, styles.isChecked)
                : classNames(styles.filtersButton)
            }
          >
            <div className={styles.btnCircleContainer}>
              <div className={styles.btnCircle}>
                  <div></div>
              </div>
            </div>
            Valmennukset
          </button>

          <button
          onClick={this.handleClicktyoyhteisoviestinta}
          className={
            this.state.isClickedtyoyhteisoviestinta
              ? classNames(styles.filtersButton, styles.isChecked)
              : classNames(styles.filtersButton)
            }
          >
          <div className={styles.btnCircleContainer}>
            <div className={styles.btnCircle}>
                <div></div>
            </div>
          </div>
          Työyhteisöviestintä
          </button>

          <button
            onClick={this.handleClickmuutosviestinta}
            className={
              this.state.isClickedmuutosviestinta
                ? classNames(styles.filtersButton, styles.isChecked)
                : classNames(styles.filtersButton)
            }
          >
          <div className={styles.btnCircleContainer}>
            <div className={styles.btnCircle}>
                <div></div>
            </div>
          </div>
          Muutosviestinta
          </button>

          <button
          onClick={this.handleClickmediaviestinta}
          className={
            this.state.isClickedmediaviestinta
              ? classNames(styles.filtersButton, styles.isChecked)
              : classNames(styles.filtersButton)
            }
          >
          <div className={styles.btnCircleContainer}>
            <div className={styles.btnCircle}>
                <div></div>
            </div>
          </div>
          Mediaviestintä
          </button>

        </div>        

        <Masonry
        elementType={'div'} // default 'div'
        options={masonryOptions} // default {}
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

      </div>

    )
  }

}

export default PageTemplate

export const pageQuery = graphql`
  query {
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