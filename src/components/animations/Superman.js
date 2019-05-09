import React from "react"
import SupermanSVG from "../../images/supermies.svg"
import supermanStyles from "./Superman.module.css"

class Superman extends React.Component {

    render() {
        return(

            <div>
                <SupermanSVG className={supermanStyles.superman} />
            </div> 

        ) 
    }

}

export default Superman