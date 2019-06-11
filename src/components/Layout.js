import React from "react"
import Header from "./Header"
import Container from "./Container/Container"
import Footer from "./Footer"
import GlobalStyles from "../styles/createGlobalStyle"
import MobileNavigation from "./MobileNavigation/MobileNavigation";

export default ({children}) => (

    <div id="wrapper">

      <GlobalStyles />
        
      <main>

        <Header />
        <MobileNavigation />

        <Container>

          {children}

        </Container>

        <Footer />

      </main> 

    </div>

)