import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import RevealComponent from "../RevealComponent/RevealComponent";
import styles from "./SectionImgTxt.module.css";

export default (props) => {

    return(    
    
        <section className="section--img-txt">
            <div>
                <RevealComponent aos="fade-right">
                    {props.imageComponent} 
                </RevealComponent>            
            </div>
            <div className={styles.txtContainer}>
                <RevealComponent aos="fade-left">
                    <div dangerouslySetInnerHTML={{ __html: props.content }} />
                    <BtnPrimary className="text-right" link="/palvelut/" text="Lue lisää" />
                </RevealComponent>            
            </div>
        </section>

    ) 

}