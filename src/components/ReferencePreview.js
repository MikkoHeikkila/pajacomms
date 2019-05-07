import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"
import containerStyles from "./ReferencePreview.module.css"

export default (props) => {

    return(

        <div className={containerStyles.singleReference}>
            <Link to={'/palvelut/' + props.slug}>
                <Img resolutions={props.image} />
                <p>{props.wpid}</p>
                <h2>{props.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: props.excerpt }}></p>
            </Link>
        </div>    

    )

}