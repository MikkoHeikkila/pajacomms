import React, { Component } from "react"
import styles from "./ContactForm.module.css"

function sendData(data) {

    var XHR = new XMLHttpRequest();
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name;
  
    // Turn the data object into an array of URL-encoded key/value pairs.
    for(name in data) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
  
    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
  
    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
      alert('Yeah! Data sent and response loaded.');
    });
  
    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
      alert('Oops! Something goes wrong.');
    });
  
    // Set up our request
    XHR.open('POST', 'http://s2.palvelin.pro/~hungrydemo/demo/pajacommswp/wp-content/themes/twentynineteen/mail/mail-test.php');
  
    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Finally, send our data.
    XHR.send(urlEncodedData);

}

class ContactForm extends Component {

  render() {

    return (

        <form class={styles.contactForm} name="contact" method="POST" data-netlify="true">
            <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <p>
                <input type="text" name="name" placeholder="Nimi"/>
            </p>
            <p>
                <input type="email" name="email" placeholder="Sähköposti" />
            </p>
            <p>
                <select name="subject">
                    <option value="aihe">Valitse aihe</option>
                    <option value="esimerkki-1">Esimerkki 1</option>
                    <option value="esimerkkki-2">Esimerkki 2</option>
                </select>
            </p>
            <p>
                <textarea name="message" rows="7" placeholder="Viesti..."></textarea>
            </p>
            <p>
                <button type="submit">Lähetä</button>
            </p>

        </form>

    )
    
  }

}

export default ContactForm