import HeaderEng from "../header/headerEng";
import Partisipals from "../partisipals";
import { useRef } from 'react';
import sendEmail from '../../function/sendMessage'
import HeaderUkr from "../header/headerUkr";
import Footer from "../footer/footer";
import Form from "./form";


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
 <Form/>
</div>
</div>
<Footer/>
</div>
        </>
    )
}