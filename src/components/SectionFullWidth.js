import React from "react"
import BtnPrimary from "../components/BtnPrimary"

export default (props) => {

    return(    
    
        <section className="section--full-width">

            {props.imageComponent}

            <div dangerouslySetInnerHTML={{ __html: props.content }} />

            <BtnPrimary link="/palvelut/" text="Lue lisää" />

        </section>

    ) 

}