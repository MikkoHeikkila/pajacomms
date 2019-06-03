import React from "react"
import Pulaa1SVG from "../../images/pulaa.svg"
import Pulaa2SVG from "../../images/pulaa_katkoviiva.svg"
import Pulaa3SVG from "../../images/pulaa_lennokki.svg"
import Pulaa4SVG from "../../images/pulaa_raketti.svg"
import styles from "./Pulaa.module.css"

class Pulaa extends React.Component {

    render() {
        return(

            <div className={styles.pulaaContainer}>
                <div className={styles.pulaaContent1}><Pulaa1SVG /></div>
                <div className={styles.pulaaContent2}><Pulaa2SVG /></div>
                <div className={styles.pulaaContent3}><Pulaa3SVG /></div>
                <div className={styles.pulaaContent4}><Pulaa4SVG /></div>
            </div> 

        ) 
    }

}

export default Pulaa