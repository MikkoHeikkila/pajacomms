import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"
import BtnPrimary from "../components/BtnPrimary"

import Superman from "../components/animations/Superman"

export default ({ data }) => {

    return(

        <Layout>

            <Container>

                <section>
                    <div>
                        <h1>Muutos on uuden alku</h1>
                        <p>Yrityksen muutto, uusi organisaatio, yritysosto,
                        työtapojen muutos tai yt:t. Meiltä saat apua
                        viestinnän suunnitteluun ja tekemiseen.</p>
                         <BtnPrimary link="/palvelut/" text="Lue lisää" />
                    </div>
                    <div>
                        [Kuva tähän]
                    </div>         
                </section>

                <section>
                    <div>
                        [Kuva tähän]
                    </div>
                    <div>
                        <h2>Pulaa kiinnostavasta sisällöstä?</h2>
                        <p>Joskus on niin kiire, että hyväkin juttu jää
                        kertomatta. Kirjoitamme tarinat mahtavista
                        tyypeistä, tärkeistä asiakkaista, isoista
                        hankkeista ja uusista tuotteista.</p>
                        <BtnPrimary link="/palvelut/" text="Lue lisää" />
                    </div>
                </section>

                <section>
                    <Superman />
                </section>

                <section>
                    <h2>Puuttuuko joukosta yksi?</h2>
                    <p>Jos rekrytointi kestää, projekti paisuu tai kollega joutuu sairauslomalle, meiltä saat kokeneen viestijän työkaveriksi lyhyemmäksi – tai pidemmäksi - aikaa.</p>
                    <BtnPrimary link="/palvelut/" text="Lue lisää" />
                </section>

                <section>
                    <div>
                        <h1>Medianäkyvyyttä uudelle tuotteelle?</h1>
                        <p>Teknologia, tuote, innovaatio, keksintö, palvelu –
                        etsimme tavan herättää toimittajien huomio ja
                        autamme rakentamaan suhteet mediaan.</p>
                        <BtnPrimary link="/palvelut/" text="Lue lisää" />
                    </div>
                    <div>
                        [Kuva tähän]
                    </div>         
                </section>

                <section>
                    <Superman />
                </section>
                
                <section>
                    <h2>Esimies on tärkein viestinnän kanava</h2>
                    <p>Kaikki eivät ole seppiä syntyessään eivätkä kaikki näe viestinnän tärkeyttä. Mutta jokainen voi oppia paremmaksi viestijäksi ja pomoksi. Esimiesvalmennus on yksi tie siihen.</p>
                    <BtnPrimary link="/palvelut/" text="Lue lisää" />
                </section>

                <BtnPrimary link="/palvelut/" text="Lue lisää" />

            </Container>
        </Layout>

    ) 

}

export const query = graphql`  
    query {
        allWordpressPage {
            edges {
                node {
                id
                guid
                status
                title
                slug
                content
                template
                menu_order
                }
            }
        } 
        allWordpressPost {
            edges {
                node {
                id
                guid
                status
                title
                slug
                content
                }
            }
        } 
        allWordpressWpReference {
            edges {
                node {
                title
                id
                type
                slug
                }
            }
        }
    }
`