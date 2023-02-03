import HeaderEng from "../header/headerEng";
import Partisipals from "../partisipals";
import { useRef } from 'react';
import sendEmail from '../../function/sendMessage'
import Footer from "../footer/footer";
import Form from "./form";


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
 <Form/>
</div>
</div>
<Footer/>
</div>
        </>
    )
}