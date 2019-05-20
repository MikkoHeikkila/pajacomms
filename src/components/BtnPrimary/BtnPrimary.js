import React, { Component } from "react"
import styles from "./BtnPrimary.module.css"
import classNames from 'classnames'

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
            <div>
                <a className={this.state.active ? classNames(styles.active, styles.btnPrimary) : styles.btnPrimary} href={this.props.link} onClick={this.handleClick}>
                    <div class={styles.btnCircleContainer}>
                        <div className={styles.btnInnerCover}></div>
                        <div class={styles.btnCircle}>    
                            <div></div>
                        </div>
                    </div>
                    {this.props.text}
                </a>           
            </div>
        );
    }
}

export default BtnPrimary