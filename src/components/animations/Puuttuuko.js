import React from "react"
import Puuttuuko1SVG from "../../images/puuttuuko_ryhma.svg"
import Puuttuuko2SVG from "../../images/puuttuuko_yksi.svg"
import "./Puuttuuko.css"

import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'

const View = props => (
    <div data-aos="draw">
        { props.children }
    </div>
);

export default Watch(

    class Puuttuuko extends React.Component {

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

                <span aos="fade-up">
                    { this.props.isInViewport ? (

                        <div className="puuttuukoContainer">
                            <div className="puuttuukoContent1"><Puuttuuko1SVG /></div>
                            <View>
                                <div className="puuttuukoContent2"><Puuttuuko2SVG /></div>
                            </View>
                        </div>

                    ) : (
    
                        <div className="puuttuukoContainer">
                            <div className="puuttuukoContent1"><Puuttuuko1SVG /></div>
                            <View aos={this.props.aos}>
                                <div className="puuttuukoContent2"><Puuttuuko2SVG /></div>
                            </View>
                        </div>                
                    
                    )}
                </span>

            ) 
        }
    }
);