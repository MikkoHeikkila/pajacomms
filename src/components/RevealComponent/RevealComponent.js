import React from 'react';
import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'

const ViewStyle = props => (
    <div data-aos={ props.aos }>
        { props.content }
    </div>
);

export default Watch(

    class RevealComponent extends React.Component {

    componentDidMount() {
        this.aos = AOS;
        this.aos.init({
            duration: 2000
        });
    }

    componentDidUpdate() {
        this.aos.refresh();
    }

    render() {

        return(
            <span>
                { this.props.isInViewport ? (
                <ViewStyle
                    aos={this.props.aos}
                    content={this.props.children}
                />
                ) : (
                <ViewStyle
                    aos={this.props.aos}
                    content={this.props.children}
                />
                )}
            </span>
            )
        }
    }
);