import HeaderEng from "../header/headerEng";
import Partisipals from "../partisipals";
import { useRef } from 'react';
import sendEmail from '../../function/sendMessage'
import Footer from "../footer/footer";


export default function ContactEng() {
    const form = useRef();
    
    return(
        <>
       <Partisipals/>
       <div className='containerHeader'>
       <HeaderEng/>
       <div className="contactDiv" >
        <div className="contactFo">
            <h1>Our contacts</h1>
            <h2>Ukraine, Lviv, Lvivska street</h2>
            <a href='tel:+380937246193'>Tel: +380937246193</a>
            <a href='mailto:jakzadarom2@gmail.com'>Email: jakzadarom2@gmail.com</a>
             </div>
       <div className='wrapper'>
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
</div>
</div>
<Footer/>
</div>
        </>
    )
}