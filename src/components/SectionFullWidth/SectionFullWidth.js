import React from "react"
import BtnPrimary from "../BtnPrimary/BtnPrimary"

import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'


function Button(props) {
    const showBtn = props.showBtn;
    if (showBtn) {
      return <BtnPrimary link="/palvelut/" text="Lue lisää" />;
    }
    return false;
}

export default (props) => {
    return(    
    
        <section className="section--full-width">

            <div data-aos="fade-left">{props.imageComponent}</div>

            <div dangerouslySetInnerHTML={{ __html: props.content }} />

            <Button />

        </section>

    ) 
}