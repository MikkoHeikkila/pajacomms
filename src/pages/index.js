import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"

import SectionFullWidth from "../components/SectionFullWidth";
import SectionTxtImg from "../components/SectionTxtImg";
import SectionImgTxt from "../components/SectionImgTxt";

export default ({ data }) => {

    const currentPage = data.wordpressPage

    return(

        <Layout>
            <Container>

                <SectionTxtImg content={currentPage.content} />

                <SectionImgTxt content={currentPage.acf.rivi_2} />

                <SectionFullWidth content={currentPage.acf.rivi_3} />

                <SectionTxtImg content={currentPage.acf.rivi_4} />

                <SectionFullWidth content={currentPage.acf.rivi_5} />

            </Container>
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