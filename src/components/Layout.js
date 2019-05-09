import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

export default ({children}) => (

    <div id="wrapper">

        <Sidebar />
        
        <main>

            <Header />

                {children}

            <Footer />

        </main>

    </div>

)