import React from "react"
import styles from "./palvelut.module.css"
import Layout from "../components/layout"

const Reference = props => (  
    <div className={styles.reference}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
)

export default () => (

    <Layout>

        <h1>Palvelut</h1>

        <div className={styles.references}>

            <Reference 
            title="Referenssi 1"
            excerpt="Lorem ipsum dolor sit amet"
            /> 
            <Reference 
            title="Referenssi 2"
            excerpt="Lorem ipsum dolor sit amet"
            />
            <Reference 
            title="Referenssi 3"
            excerpt="Lorem ipsum dolor sit amet"
            /> 

        </div>

    </Layout>

)