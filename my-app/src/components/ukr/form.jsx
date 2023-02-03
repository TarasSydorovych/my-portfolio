
import { useRef, useState } from 'react';
import sendEmail from '../../function/sendMessage'

export default function Form() {
    const form = useRef();



    return(

        <form className='contact-form' type='submit' ref={form} onSubmit={(e) => sendEmail(form, e)}>
    <div className='input-fields'>
      <input type="text" name="user_name" className='input' placeholder="Ім'я"/>
      <input type="text" className='input' name="user_email" placeholder='Email адрес'/>
      <input type="text" className='input' name="Phone" placeholder='Телефон'/>
      <input type="text" className='input' name="Subject" placeholder='Тема'/>
    </div>
    <div className='msg'>
      <textarea placeholder='Повідомлення' name="message"></textarea>
      <button className='btn' type='submit'>Відправити повідомлення</button>
    </div>
  </form>
    )
}