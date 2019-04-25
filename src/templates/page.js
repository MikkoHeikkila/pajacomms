import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"

export default ({ data }) => {

    console.log(data)

    return(

        <Layout>
            <Container>

                <h1>Sivu</h1>

                <p>Yrityksen muutto, uusi organisaatio, yritysosto,
                työtapojen muutos tai yt:t. Meiltä saat apua
                viestinnän suunnitteluun ja tekemiseen.</p>

            </Container>
        </Layout>

    ) 

}