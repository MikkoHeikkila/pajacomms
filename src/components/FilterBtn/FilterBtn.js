import React, { Component } from "react"
import styles from "./FilterBtn.module.css"
import classNames from 'classnames'

class FilterBtn extends Component {

  render() {

    return (

        <button
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

    )
  }

}

export default FilterBtn