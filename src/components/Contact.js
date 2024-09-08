import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName('');
    setEmail('');
    setCheck(false);
    setMessage('');
  }

  return (
    <div className='contact'>
      <div className='cont'>
        <h1>Contact Us</h1>
        <form onSubmit={handlesubmit}>
          <label>Name:
            <input 
              type='text' 
              placeholder='Enter Name' 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              className='field'
            />
          </label>
          <label>Email:
            <input 
              type='email' 
              placeholder='xyz@gmail.com' 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className='field'
            />
          </label>
          <label>Message:
            <textarea 
              placeholder='Type your message here' 
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
              className='field'
            />
          </label>
          <label>
            <input 
              type='checkbox' 
              checked={check} 
              onChange={(e) => setCheck(e.target.checked)}
            />
            I Accept The Terms And Conditions
          </label>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
