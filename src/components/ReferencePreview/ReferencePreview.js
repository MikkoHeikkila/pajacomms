import React from "react"
//import { Link } from "gatsby";
import Img from "gatsby-image"
import styles from "./ReferencePreview.module.css"

export default (props) => {

    return(

        <div className={`grid-item ${props.categoryslug} ${styles.singleReference}`}>
            {/*<Link to={'/palvelut/' + props.slug}>*/}
                <div className={styles.imageContainer}>
                    <div className={`${props.categoryslug} reference-overlay ${styles.imageOverlay}`}></div>
                    <Img resolutions={props.image} />
                    {/*<p className={styles.categoryName}>{props.categoryname}</p>*/}
                </div>
                <h4>{props.title}</h4>
                <p className={styles.readMore}>Lue lisää</p>
            {/*</Link>*/}
        </div> 

    )

}