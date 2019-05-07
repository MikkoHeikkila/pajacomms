import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"
import containerStyles from "./ReferencePreview.module.css"

export default (props) => {

    return(

        <div className={`grid-item ${props.categoryslug}`}>
            <Link to={'/palvelut/' + props.slug}>
                <p>Category name: {props.categoryname}</p>
                <Img resolutions={props.image} />
                <p>{props.wpid}</p>
                <h2>{props.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: props.excerpt }}></p>
            </Link>
        </div> 

    )

}