import React from "react"
import Muutos1SVG from "../../images/muutos1.svg"
import Muutos2SVG from "../../images/muutos2.svg"
import styles from "./Muutos.module.css"

class Muutos extends React.Component {

    render() {
        return(

            <div className={styles.muutosContainer}>
                <div className={styles.muutosContent1}><Muutos1SVG /></div>
                <div className={styles.muutosContent2}><Muutos2SVG /></div>
            </div> 

        ) 
    }

}

export default Muutos