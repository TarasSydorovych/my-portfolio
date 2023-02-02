import HeaderEng from "../header/headerEng";
import Partisipals from "../partisipals";
import { useRef } from 'react';
import sendEmail from '../../function/sendMessage'
import HeaderUkr from "../header/headerUkr";
import Footer from "../footer/footer";


export default function ContactUkr() {
    const form = useRef();
    
    return(
        <>
       <Partisipals/>
       <div className='containerHeader'>
       <HeaderUkr/>
       <div className="contactDiv" >
        <div className="contactFo">
            <h1>Наші контакти</h1>
            <h2>Україні, Львів, вулиця Львівська</h2>
            <a href='tel:+380937246193'>Тел: +380937246193</a>
            <a href='mailto:jakzadarom2@gmail.com'>Email: jakzadarom2@gmail.com</a>
             </div>
       <div className='wrapper'>
  <form className='contact-form' type='submit' ref={form} onSubmit={(e) => sendEmail(form, e)}>
    <div className='input-fields'>
      <input type="text" name="user_name" className='input' placeholder="Ім'я"/>
      <input type="text" className='input' name="user_email" placeholder='Email адрес'/>
      <input type="text" className='input' name="Phone" placeholder='Телефон'/>
      <input type="text" className='input' name="Subject" placeholder='Тема'/>
    </div>
    <div className='msg'>
      <textarea placeholder='Повідомлення' name="message"></textarea>
      <button className='btn' type='submit'>Відпраити повідомлення</button>
    </div>
  </form>
</div>
</div>
<Footer/>
</div>
        </>
    )
}