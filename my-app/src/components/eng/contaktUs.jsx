import { useRef, useState } from 'react';
import sendEmail from '../../function/sendMessage'
import { AiOutlineClose } from "react-icons/ai";
import Form from './form';


export default function ContaktUs() {
    const form = useRef();
    const [call, setCall] = useState(false);

    return(
        <>
        <div className="wraperFixed">
           <button className="fixedButton" onClick={() => setCall(true)}>
          Write to us
          <span class="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
           </button>
           </div>
{call &&
<div className="contacktAll">
    <div className="headerContact">
        <h1>Contact Form</h1>
        <AiOutlineClose style={{fontSize: '2em', cursor: 'pointer'}} onClick={() => setCall(false)}/>
    </div>
    <div className='bodyContact'>
    <Form/>
  </div>
</div>
}
        </>
    )
}