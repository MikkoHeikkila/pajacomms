import React, { Component } from "react"

class BtnPrimary extends Component {

    constructor(props) {
        super(props);
        this.animateBtn = this.animateBtn.bind(this);
    }

    animateBtn = (event) => {

        event.preventDefault();
        const link = this.props.link;

        document.getElementById("special-btn").classList.toggle("active");
        /*
        setTimeout( 
            function(){
                window.location = link
            }, 1000 
        );
        */

    }
  
    render() {
        return (

            <a id="special-btn" className="btn btn-primary" href={this.props.link} onClick={this.animateBtn}>
                <div class="btn-circle-container">
                    <div className="btn-inner-cover"></div>
                    <div class="btn-circle">    
                        <div></div>
                    </div>
                </div>
                {this.props.text}
            </a>

        );
    }
}

export default BtnPrimary