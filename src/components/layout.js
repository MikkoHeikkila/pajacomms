import React from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Footer from "../components/footer"

export default ({ children }) => (

    <div id="wrapper">

        <Sidebar />
        
        <main>

            <Header />

            {children}

            <Footer />

        </main>

    </div>

)