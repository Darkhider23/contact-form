import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lp8dssf', 'template_sha0iuu', form.current, 'LY5IQ3uGGdDW1Alzl')
      .then((result) => {
          console.log(result.text);
          if(result.text == "OK")
          alert("Message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
        <div className='form-elements'>
      <label >Name</label>
      <input type="text" name="user_name" placeholder='Name' />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Email'/>
      <label>Message</label>
      <textarea name="message" placeholder='Message' />
      <button className='myButton' id='myButton' type="submit">Send</button>
      </div>
    </form>
    </div>
    );
  }
export default ContactForm;
