import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import RevealComponent from "../RevealComponent/RevealComponent";
import styles from "./SectionFullWidth.module.css";

export default (props) => {
    return(    
        
        <section className={styles.sectionFullWidth}>
            <RevealComponent aos="fade-up">
                <div className={styles.imageContainer}>{props.imageComponent}</div>
            </RevealComponent>
            <RevealComponent aos="fade-up">
                <div className={styles.txtContainer} dangerouslySetInnerHTML={{ __html: props.content }} />
                <BtnPrimary link="/palvelut/" text="Lue lisää" />
            </RevealComponent>
        </section>

    ) 
}