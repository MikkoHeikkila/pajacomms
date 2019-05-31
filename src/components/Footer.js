import React from "react"
import LogoWhite from "../images/paja_logo_white.svg"
import Container from "./Container/Container";

export default () => (

    <footer>

        <Container>
            <div class="flex-container">        
                <div className="flex-container separator-right">
                    <div>
                        <LogoWhite id="logo-footer"/>
                    </div>
                    <div>
                        <p><b>Viestintätoimisto Paja</b></p>        
                        <address>
                            <span>Hämeentie 157</span><br/>
                            <span>00560 Helsinki</span><br/>
                            <span>Helsinki</span><br/>
                        </address>                    
                    </div>  
                </div>
                <div>
                    <address>
                        <span>marianne.holmlund@pajacomms.com</span><br/>
                        <span>+358 50 1842</span><br/>
                    </address>
                    <address>
                        <span>kirsi.varkemaa@pajacomms.com</span><br/>
                        <span>+358 50 522 2600</span><br/>
                    </address>            
                </div>
            </div>
        </Container>

        <div className="m-t-lg">
            <p className="faded">© Paja Communications 2019</p>
        </div>

    </footer>
    
)