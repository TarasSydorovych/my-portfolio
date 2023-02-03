import { useRef, useState } from 'react';
import sendEmail from '../../function/sendMessage'




export default function Form(){
    const form = useRef();


    return(
<form className='contact-form' type='submit' ref={form} onSubmit={(e) => sendEmail(form, e)}>
    <div className='input-fields'>
      <input type="text" name="user_name" className='input' placeholder='Name'/>
      <input type="text" className='input' name="user_email" placeholder='Email Adress'/>
      <input type="text" className='input' name="Phone" placeholder='Phone'/>
      <input type="text" className='input' name="Subject" placeholder='Subject'/>
    </div>
    <div className='msg'>
      <textarea placeholder='Message' name="message"></textarea>
      <button className='btn' type='submit'>Send message</button>
    </div>
  </form>
    )
}