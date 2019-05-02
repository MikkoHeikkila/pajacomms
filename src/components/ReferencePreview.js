import React from "react"
import { Link } from "gatsby";

import containerStyles from "./ReferencePreview.module.css"

export default (props) => (
    
    <div className={containerStyles.singleReference}>
        <Link to={'/palvelut/' + props.slug}>
            <p>Image here</p>
            <h2>{props.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.excerpt }}></p>
        </Link>
    </div>

)