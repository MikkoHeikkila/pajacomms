import React from "react"
import Puuttuuko1SVG from "../../images/puuttuuko_ryhma.svg"
import Puuttuuko2SVG from "../../images/puuttuuko_yksi.svg"
import styles from "./Puuttuuko.module.css"

class Puuttuuko extends React.Component {

    render() {
        return(

            <div className={styles.puuttuukoContainer}>
                <div className={styles.puuttuukoContent1}><Puuttuuko1SVG /></div>
                <div className={styles.puuttuukoContent2}><Puuttuuko2SVG /></div>
            </div> 

        ) 
    }

}

export default Puuttuuko