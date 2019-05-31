import React from "react"
import SectionFullWidth from "../components/SectionFullWidth/SectionFullWidth";

//Import animated images
import SupermanContainer from "../components/animations/Superman"
//Images to consts, to be passed as props to container components
const Superman = <SupermanContainer />

export default ({ data }) => {

    return(

        <div>
            <SectionFullWidth imageComponent={Superman} />
        </div> 

    ) 

}