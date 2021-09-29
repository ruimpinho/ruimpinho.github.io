import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';


function Contact() {
  return (
    <div class="content">
        <h1>Contact</h1>
        <br/>
        <p>Let's build new websites together? <br/> Here's how you can contact me:</p>
        <Button variant="success" href="https://www.linkedin.com/in/rmapinho/" target="_blank" rel="noopener noreferrer">Visit Rui's profile</Button>{' '}
    </div>
  );
}

export default Contact;
