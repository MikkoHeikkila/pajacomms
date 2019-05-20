import React from "react"
import BtnPrimary from "../components/BtnPrimary/BtnPrimary"

export default (props) => {

    return(    
    
        <section className="section--img-txt">

            <div>
                {props.imageComponent}
            </div>

            <div>
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <BtnPrimary link="/palvelut/" text="Lue lisää" />
            </div>

        </section>

    ) 

}