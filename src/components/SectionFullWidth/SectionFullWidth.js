import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"

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

            <div>{props.imageComponent}</div>

            <div dangerouslySetInnerHTML={{ __html: props.content }} />

            <Button />

        </section>

    ) 
}