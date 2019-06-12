import React from "react"
import Media1SVG from "../../images/media1.svg"
import Media2SVG from "../../images/media2.svg"
import Media3SVG from "../../images/media3.svg"
import Media4SVG from "../../images/media_lappari.svg"
import "./Medianakyvyys.css"

import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'

const View = props => (
    <div data-aos="mediaAnimations">
        { props.children }
    </div>
);

export default Watch(

    class Medianakyvyys extends React.Component {

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
                    <div className="mediaContainer">
                        <div className="mediaContent1"><Media4SVG /></div>
                        <div className="mediaContent2"><Media2SVG /></div>
                        <div className="mediaContent3"><Media3SVG /></div>
                    </div> 
                </View>

            ) 
        }
    }
);