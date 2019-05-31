import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import AOS from 'aos';
import 'aos/dist/aos.css'

export default (props) => {

    return(    
    
        <section className="section--img-txt">

            <div data-aos="fade-right">
                {props.imageComponent}
            </div>

            <div data-aos="fade-left">
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <BtnPrimary link="/palvelut/" text="Lue lisää" />
            </div>

        </section>

    ) 

}