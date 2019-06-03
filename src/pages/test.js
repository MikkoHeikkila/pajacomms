import React from "react"
import SectionFullWidth from "../components/SectionFullWidth/SectionFullWidth";

//Import animated images
import MedianakyvyysContainer from "../components/animations/Medianakyvyys"
//Images to consts, to be passed as props to container components
const Medianakyvyys = <MedianakyvyysContainer />

export default ({ data }) => {

    return(

        <div>
            <SectionFullWidth imageComponent={Medianakyvyys} />
        </div> 

    ) 

}