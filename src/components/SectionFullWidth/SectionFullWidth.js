import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import RevealComponent from "../RevealComponent/RevealComponent";
import styles from "./SectionFullWidth.module.css";

function Button(props) {
    const showBtn = props.showBtn;
    if (showBtn) {
      return <BtnPrimary link="/palvelut/" text="Lue lisää" />;
    }
    return false;
}

export default (props) => {
    return(    
        
        <section className={styles.sectionFullWidth}>
            <RevealComponent aos="fade-up">
                <div className={styles.imageContainer}>{props.imageComponent}</div>
            </RevealComponent>
            <RevealComponent aos="fade-up">
                <div className={styles.txtContainer} dangerouslySetInnerHTML={{ __html: props.content }} />
                <Button />
            </RevealComponent>
        </section>

    ) 
}