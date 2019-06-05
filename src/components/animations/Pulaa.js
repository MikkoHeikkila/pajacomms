import React from "react"
import Pulaa1SVG from "../../images/pulaa.svg"
import Pulaa2SVG from "../../images/pulaa_katkoviiva.svg"
import Pulaa3SVG from "../../images/pulaa_lennokki.svg"
import Pulaa4SVG from "../../images/pulaa_raketti.svg"
import "./Pulaa.css"

import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'

const View = props => (
    <div data-aos="pulaaAnimations">
        { props.children }
    </div>
);

export default Watch(

    class Pulaa extends React.Component {

        componentDidMount() {
            this.aos = AOS;
            this.aos.init({
                duration: 0
            });
        }

        componentDidUpdate() {
            this.aos.refresh();
        }

        render() {
            return(

                <View content={this.props.children}>
                    <div className="pulaaContainer">
                        <div className="pulaaContent1"><Pulaa1SVG /></div>
                        <div className="pulaaContent2"><Pulaa2SVG /></div>
                        <div className="pulaaContent3"><Pulaa3SVG /></div>
                        <div className="pulaaContent4"><Pulaa4SVG /></div>
                    </div>
                </View>

            ) 
        }
    }
);