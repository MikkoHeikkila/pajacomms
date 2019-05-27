import React, { Component } from "react"
import styles from "./BtnPrimary.module.css"
import classNames from 'classnames'
import { Link } from "gatsby"

class BtnPrimary extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          active: false
        };
    }

    handleClick(e) {
        e.preventDefault();
        const link = this.props.link;
        
        this.setState({
            active: true
        });
        setTimeout(
            function(){
                window.location = link //Redirect
            }, 500 
        );
    }
  
    render() {
        return (
            <Link className={this.state.active ? classNames(styles.active, styles.btnPrimary) : styles.btnPrimary} to={this.props.link} onClick={this.handleClick}>
                <div className={styles.btnInnerCover} />
                 <div class={styles.btnCircle}>    
                    <div />
                </div>
                {this.props.text}
            </Link>           
        );
    }
}

export default BtnPrimary