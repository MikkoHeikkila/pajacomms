import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import SectionFullWidth from "../components/SectionFullWidth/SectionFullWidth";
import SectionTxtImg from "../components/SectionTxtImg/SectionTxtImg";
import SectionImgTxt from "../components/SectionImgTxt/SectionImgTxt";

//Import animated images
import SupermanContainer from "../components/animations/Superman"
import SectionHero from "../components/SectionHero/SectionHero";
//Images to consts, to be passed as props to container components
const Superman = <SupermanContainer />

export default ({ data }) => {

    const currentPage = data.wordpressPage

    return(

        <Layout>
            
            <Helmet>          
                <meta charSet="utf-8" />
                <title>{currentPage.title} - Pajacomms</title>
                <link rel="canonical" href="https://practical-austin-185700.netlify.com/" />
                <html lang={currentPage.polylang_current_lang} />
            </Helmet>
            <SectionHero content={currentPage.content} imageComponent={Superman} />
            <SectionImgTxt content={currentPage.acf.rivi_2} imageComponent={Superman}/>
            <SectionFullWidth content={currentPage.acf.rivi_3} imageComponent={Superman} showBtn={true}/>
            <SectionTxtImg content={currentPage.acf.rivi_4} imageComponent={Superman}/>
            <SectionFullWidth content={currentPage.acf.rivi_5} imageComponent={Superman} showBtn={true} />
        </Layout>

    ) 

}

export const pageQuery = graphql`
    query {
        wordpressPage(id: { eq: "3c9fe169-09c3-5ce2-bae8-101a6cc7d0b9" }) {
            title
            content
            acf{
                rivi_2
                rivi_3
                rivi_4
                rivi_5
            }
            polylang_current_lang
            polylang_translations{
                slug
            }
        }
    }
`