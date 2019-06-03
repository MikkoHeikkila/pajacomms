import React, { Component } from "react"
import styles from "./ContactForm.module.css"
//import axios from 'axios';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit( event ) {
    event.preventDefault();
  }


  render() {

    return (

        <form class={styles.contactForm} name="contact" method="POST" action="https://pajacomms.com/wp-content/themes/pajacomms/mail/mail-test.php" data-netlify="true">
            <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <p>
                <input id="name" type="text" name="name" placeholder="Nimi" onChange={e => this.setState({ name: e.target.value })}/>
            </p>
            <p>
                <input id="email" type="email" name="email" placeholder="Sähköposti" onChange={e => this.setState({ email: e.target.value })}/>
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
                <button onClick={e => this.handleFormSubmit(e)} type="submit">Lähetä</button>
            </p>

        </form>

    )
    
  }

}

export default ContactForm