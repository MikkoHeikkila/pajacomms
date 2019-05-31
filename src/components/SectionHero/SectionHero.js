import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"
import styles from "./SectionHero.module.css"
import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'

export default (props) => {

    return(    
    
        <section className={styles.heroContainer}>

            <div data-aos="fade-right">
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <BtnPrimary link="/palvelut/" text="Lue lisää" />
            </div>

            <div data-aos="fade-left">
                {props.imageComponent}
            </div>

        </section>

    ) 

}