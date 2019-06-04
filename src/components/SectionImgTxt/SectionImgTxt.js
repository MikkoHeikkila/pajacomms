import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import RevealComponent from "../RevealComponent/RevealComponent";

export default (props) => {

    return(    
    
        <section className="section--img-txt">
            <div>
                <RevealComponent aos="fade-right">
                    {props.imageComponent} 
                </RevealComponent>            
            </div>
            <div>
                <RevealComponent aos="fade-left">
                    <div dangerouslySetInnerHTML={{ __html: props.content }} />
                    <BtnPrimary link="/palvelut/" text="Lue lisää" />
                </RevealComponent>            
            </div>
        </section>

    ) 

}