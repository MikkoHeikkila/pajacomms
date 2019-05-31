import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import styles from "./SectionHero.module.css"

export default (props) => {

    return(    
    
        <section className={styles.heroContainer}>

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