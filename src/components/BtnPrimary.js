import React, { Component } from "react"
import s from "./BtnPrimary.module.css"

class BtnPrimary extends Component {

    constructor(props) {
        super(props);
        this.animateBtn = this.animateBtn.bind(this);//Bind function 
    }

    animateBtn = (event) => {

        event.preventDefault();
        const link = this.props.link;

        //document.getElementById("special-btn").classList.toggle("active");
        
        setTimeout(
            function(){
                window.location = link //Redirect
            }, 500 
        );

    }
  
    render() {
        return (
            <div>
                <a id={s.redirectBtn} className="btn btn-primary" href={this.props.link} onClick={this.animateBtn}>
                    <div class="btn-circle-container">
                        <div className="btn-inner-cover"></div>
                        <div class="btn-circle">    
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