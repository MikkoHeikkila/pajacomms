import React from "react"
import BtnPrimary from "../components/BtnPrimary"
import Superman from "../components/animations/Superman"

export default (props) => {

    return(    
    
        <section className="section--full-width">

            <Superman />

            <div dangerouslySetInnerHTML={{ __html: props.content }} />

            <BtnPrimary link="/palvelut/" text="Lue lisää" />

        </section>

    ) 

}