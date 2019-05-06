import React from "react"
import { Link } from "gatsby";

import containerStyles from "./ReferencePreview.module.css"

export default (props) => {
    
    /*
    const data = useStaticQuery(graphql`
    query($wordpress_id: Int!) {
        wordpressAcfReference(wordpress_id: { eq: $wordpress_id }){
            acf{
                featured_image {
                    wordpress_id
                    title
                    filename
                    filesize
                    url
                    link
                    alt
                    author
                    description
                    caption
                    name
                    status
                    uploaded_to
                    date
                    modified
                    menu_order
                    mime_type
                    type
                    subtype
                    icon
                    width
                    height
                }
            }
        }
    }
    `)
    */

    return(

        <div className={containerStyles.singleReference}>
            <Link to={'/palvelut/' + props.slug}>
                <p>Image here</p>
                <p>{props.wpid}</p>
                <h2>{props.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: props.excerpt }}></p>
            </Link>
        </div>    

    )

}