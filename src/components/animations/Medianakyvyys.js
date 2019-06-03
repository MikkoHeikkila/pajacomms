import React from "react"
import Media1SVG from "../../images/media1.svg"
import Media2SVG from "../../images/media2.svg"
import Media3SVG from "../../images/media3.svg"
import styles from "./Medianakyvyys.module.css"

class Medianakyvyys extends React.Component {

    render() {
        return(

            <div className={styles.mediaContainer}>
                <div className={styles.mediaContent1}><Media1SVG /></div>
                <div className={styles.mediaContent2}><Media2SVG /></div>
                <div className={styles.mediaContent3}><Media3SVG /></div>
            </div> 

        ) 
    }

}

export default Medianakyvyys