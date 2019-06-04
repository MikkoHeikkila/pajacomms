import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import RevealComponent from "../RevealComponent/RevealComponent";

function Button(props) {
    const showBtn = props.showBtn;
    if (showBtn) {
      return <BtnPrimary link="/palvelut/" text="Lue lisää" />;
    }
    return false;
}

export default (props) => {
    return(    
        
        <section className="section--full-width">
            <RevealComponent aos="fade-up">
                <div>{props.imageComponent}</div>
            </RevealComponent>
            <RevealComponent aos="fade-up">
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <Button />
            </RevealComponent>
        </section>

    ) 
}