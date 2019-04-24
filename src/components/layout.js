import React from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Footer from "../components/footer"
import { StaticQuery, graphql } from "gatsby"

export default ({ children }) => (

    <StaticQuery    
    query={graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `}

    render={data => (

    <div>

        <Header />

        <Sidebar />

        <main>

            <h1>{data.site.siteMetadata.title}</h1>

            {children}

        </main>

        <Footer />

    </div>

    )}  />

)