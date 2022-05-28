import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './index.scss'

function Contact() {

  const createNotification = (type) => {
      switch (type) {
        case 'success':
          return NotificationManager.success('Sent Successfully', 'Email ');
        case 'error':
          return NotificationManager.error('Unable To send email', 'error');
        default:
          return null;
      }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3sxmapj', 'contact_form', form.current, 'ohLyWXLS2AKYrHlEF')
      .then((result) => {
          createNotification('success');
      }, (error) => {
          createNotification('error');
      });
  };

  return (
    <div className='contact-page'>
      <h1>Want to get in touch? Send me a message</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor='name'>Name:</label>
        <input id='name' type="text" name="user_name" placeholder='Your Name'/>
        <label htmlFor='email'>Email:</label>
        <input id='email' type="email" name="user_email" placeholder='youremail@example.com'/>
        <label htmlFor='message'>Message:</label>
        <textarea id='message' name="message" placeholder='Your Message'/>
        <input type="submit" value="Send" id='send'/>
      </form> 
      <NotificationContainer />     
    </div>
  )
}

export default Contact