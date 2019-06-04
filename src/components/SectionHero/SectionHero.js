import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import styles from "./SectionHero.module.css"
import RevealComponent from "../RevealComponent/RevealComponent";

export default (props) => {

    return(    
    
        <section className={styles.heroContainer}>
            <div className={styles.textContainer}>
                <RevealComponent aos="fade-right">
                    <div dangerouslySetInnerHTML={{ __html: props.content }} />
                    <BtnPrimary link="/palvelut/" text="Lue lisää" />
                </RevealComponent>
            </div>
            <div className={styles.imageContainer}>
                <RevealComponent aos="fade-left">
                    {props.imageComponent}
                </RevealComponent>
            </div>
        </section>
       
    ) 

}