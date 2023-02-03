import { useRef, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import Form from './form';


export default function ContaktUs() {
   
    const [call, setCall] = useState(false);

    return(
        <>
        <div className="wraperFixed">
           <button className="fixedButton" onClick={() => setCall(true)}>
          Напишіть нам
           </button>
           </div>
{call &&
<div className="contacktAll">
    <div className="headerContact">
        <h1>Контактна форма</h1>
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