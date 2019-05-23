import React, { Component } from "react"
import styles from "../templates/template-references.module.css"
import classNames from 'classnames'
import Isotope from "isotope-layout/js/isotope"

class ReferenceFilter extends Component {

  constructor() {

    super();

    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickValmennukset = this.handleClickValmennukset.bind(this);
    this.handleClickTyoyhteisoviestinta = this.handleClickTyoyhteisoviestinta.bind(this);
    this.handleClickMuutosviestinta = this.handleClickMuutosviestinta.bind(this);
    this.handleClickMediaviestinta = this.handleClickMediaviestinta.bind(this);
    
    this.state = {
      isClickedAll: true,
      isClickedValmennukset: false,
      isClickedTyoyhteisoviestinta: false,
      isClickedMuutosviestinta: false,
      isClickedMediaviestinta: false
    };
  }

  componentDidMount() {
    
    if (this.iso === undefined){
        this.iso = new Isotope('.grid', {
          itemSelector: '.grid-item',
          layoutMode: "fitRows"
        });      
      }
  }

  handleClickAll(e) {

    this.setState({
      isClickedAll: true,
      isClickedValmennukset: false,
      isClickedTyoyhteisoviestinta: false,
      isClickedMuutosviestinta: false,
      isClickedMediaviestinta: false
    });

    if (this.iso === undefined){
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: "fitRows"
      });      
    }

    this.iso.arrange({ filter: "*" });

  }

  handleClickValmennukset(e) {

    this.setState({
      isClickedAll: false,
      isClickedValmennukset: true,
      isClickedTyoyhteisoviestinta: false,
      isClickedMuutosviestinta: false,
      isClickedMediaviestinta: false
    });

    if (this.iso === undefined){
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: "fitRows"
      });      
    }


    this.iso.arrange({ filter: `.valmennukset` });
  }

  handleClickTyoyhteisoviestinta(e) {

    this.setState({
      isClickedAll: false,
      isClickedValmennukset: false,
      isClickedTyoyhteisoviestinta: true,
      isClickedMuutosviestinta: false,
      isClickedMediaviestinta: false
    });

    if (this.iso === undefined){
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: "fitRows"
      });      
    }
    this.iso.arrange({ filter: `.tyoyhteisoviestinta` });
  }

  handleClickMuutosviestinta(e) {

    this.setState({
      isClickedAll: false,
      isClickedValmennukset: false,
      isClickedTyoyhteisoviestinta: false,
      isClickedMuutosviestinta: true,
      isClickedMediaviestinta: false
    });

    if (this.iso === undefined){
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: "fitRows"
      });      
    }

    this.iso.arrange({ filter: `.muutosviestinta` });
  }

  handleClickMediaviestinta(e) {

    this.setState({
      isClickedAll: false,
      isClickedValmennukset: false,
      isClickedTyoyhteisoviestinta: false,
      isClickedMuutosviestinta: false,
      isClickedMediaviestinta: true
    });

    if (this.iso === undefined){
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: "fitRows"
      });      
    }


    this.iso.arrange({ filter: `.mediaviestinta` });
  }


  render() {

    return (

      <div>

        <div className={styles.filtersButtonGroup}>

          <button
            onClick={this.handleClickAll}
            className={
              this.state.isClickedAll
                ? classNames(styles.filtersButton, styles.isChecked)
                : styles.filtersButton
            }
          >
            <div className={styles.btnCircleContainer}>
              <div className={styles.btnCircle}>
                  <div></div>
              </div>
            </div>
            Kaikki
          </button>

          <button
            onClick={this.handleClickValmennukset}
            className={
              this.state.isClickedValmennukset
                ? classNames(styles.filtersButton, styles.isChecked)
                : styles.filtersButton
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
          onClick={this.handleClickTyoyhteisoviestinta}
          className={
            this.state.isClickedTyoyhteisoviestinta
              ? classNames(styles.filtersButton, styles.isChecked)
              : styles.filtersButton
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
            onClick={this.handleClickMuutosviestinta}
            className={
              this.state.isClickedMuutosviestinta
                ? classNames(styles.filtersButton, styles.isChecked)
                : styles.filtersButton
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
          onClick={this.handleClickMediaviestinta}
          className={
            this.state.isClickedMediaviestinta
              ? classNames(styles.filtersButton, styles.isChecked)
              : styles.filtersButton
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

        <div className="grid">
            <div className={`grid-item tech`}>
                <div >
                    <div className={`reference-overlay`}></div>
                    <p>Test</p>
                </div>
                <p>Lue lisää</p>
            </div> 
        </div>  

      </div>

    )
  }

}

export default ReferenceFilter