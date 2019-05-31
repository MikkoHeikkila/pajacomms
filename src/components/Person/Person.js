import React from "react"
import styles from "./Person.module.css"

export default (props) => {
    return(    
    
        <div className={styles.person}>
           <h4>{props.name}</h4>
           <p>{props.name}</p>
           <p>{props.title}</p>
           <div dangerouslySetInnerHTML={{ __html: props.description}} />
           <p>{props.phone}</p>
           <p>{props.email}</p>
        </div>

    ) 
}