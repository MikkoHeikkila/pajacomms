import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import RevealComponent from "../RevealComponent/RevealComponent";
import styles from "./SectionTxtImg.module.css";

export default (props) => {

    return(    
    
        <section className={styles.sectionTxtImg}>
            <div className={styles.txtContainer}>
                <RevealComponent aos="fade-right">
                    <div dangerouslySetInnerHTML={{ __html: props.content }} />
                    <BtnPrimary link="/palvelut/" text="Lue lisää" />
                </RevealComponent>
            </div>
            <div className={styles.flexCenterContainer}>
                <RevealComponent aos="fade-left">
                    {props.imageComponent}
                </RevealComponent>
            </div>   
        </section>

    ) 

}