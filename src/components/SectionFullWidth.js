import React from "react"
import BtnPrimary from "../components/BtnPrimary/BtnPrimary"

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

            {props.imageComponent}

            <div dangerouslySetInnerHTML={{ __html: props.content }} />

            <Button />

        </section>

    ) 
}