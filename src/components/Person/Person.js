import React, { Component } from "react"
import Img from "gatsby-image"
import styles from "./Person.module.css"

class Person extends Component {

    render() {
  
        return (
  
            <div className={styles.person}>
                <Img resolutions={this.props.image} />
                <h4>{this.props.name}</h4>
                <p>{this.props.name}</p>
                <p>{this.props.title}</p>
                <div dangerouslySetInnerHTML={{ __html: this.props.description}} />
                <p>{this.props.phone}</p>
                <p>{this.props.email}</p>
            </div>
  
        )
    }
}
  
export default Person