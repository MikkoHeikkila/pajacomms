import React from "react"
import BtnPrimary from "../components/BtnPrimary/BtnPrimary"

export default (props) => {

    return(    
    
        <section className="section--txt-img">

            <div>
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <BtnPrimary link="/palvelut/" text="Lue lisää" />
            </div>

            <div>
                {props.imageComponent}
            </div>

        </section>

    ) 

}