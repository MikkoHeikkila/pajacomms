import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import SectionFullWidth from "../components/SectionFullWidth/SectionFullWidth";
import SectionTxtImg from "../components/SectionTxtImg/SectionTxtImg";
import SectionImgTxt from "../components/SectionImgTxt/SectionImgTxt";
import SectionHero from "../components/SectionHero/SectionHero";

//Import animated images
import SupermanContainer from "../components/animations/Superman"
import MuutosContainer from "../components/animations/Muutos"
import PulaaContainer from "../components/animations/Pulaa"
import PuuttuukoContainer from "../components/animations/Puuttuuko"
import MedianakyvyysContainer from "../components/animations/Medianakyvyys"

//Images to consts, to be passed as props to container components
const Superman = <SupermanContainer />
const Muutos = <MuutosContainer />
const Pulaa = <PulaaContainer />
const Puuttuuko = <PuuttuukoContainer />
const Medianakyvyys = <MedianakyvyysContainer />

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

            <SectionHero 
                content={currentPage.content}
                imageComponent={Muutos}
            />

            <SectionImgTxt 
                content={currentPage.acf.rivi_2}
                imageComponent={Pulaa}
            />

            <SectionFullWidth 
                content={currentPage.acf.rivi_3}
                imageComponent={Puuttuuko}
                showBtn={true}
            />

            <SectionTxtImg 
                content={currentPage.acf.rivi_4}
                imageComponent={Medianakyvyys}
            />

            <SectionFullWidth 
                content={currentPage.acf.rivi_5}
                imageComponent={Superman}
                showBtn={true}
            />

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