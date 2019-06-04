import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import RevealComponent from "../RevealComponent/RevealComponent";

export default (props) => {

    return(    
    
        <section className="section--txt-img">
            <div>
                <RevealComponent aos="fade-right">
                    <div dangerouslySetInnerHTML={{ __html: props.content }} />
                    <BtnPrimary link="/palvelut/" text="Lue lisää" />
                </RevealComponent>
            </div>
            <div className="flex-center-container">
                <RevealComponent aos="fade-left">
                    {props.imageComponent}
                </RevealComponent>
            </div>   
        </section>

    ) 

}