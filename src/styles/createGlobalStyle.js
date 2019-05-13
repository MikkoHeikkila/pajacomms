import { createGlobalStyle } from "styled-components";
//import fontFiles from "../fonts";
import fontFiles from "../fonts/index"

export default createGlobalStyle `
  @font-face {
    font-family: "RaisonneRegular";
    font-style: normal;
    font-weight: normal;
    src: local("RaisonneRegular"), local("RaisonneRegular"), url(${fontFiles.RaisonneRegularTTF}) format("truetype"), url(${fontFiles.RaisonneRegularWOFF}) format("woff");
  }
`