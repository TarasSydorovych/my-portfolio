import { useEffect, useRef, useState } from 'react';
import sendEmail from '../../function/sendMessage'




export default function Form(){
    const form = useRef();
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonecheck, setPhonecheck] = useState(false);
    const [namecheck, setNamecheck] = useState(false);
    const [clickCH, setClickCH] = useState(false);
    const [clickCHErr, setClickCHErr] = useState('Fill in all the details');
    const [emailcheck, setEmailcheck] = useState(false);
    const [phonecheckErr, setPhonecheckErr] = useState('The phone field cannot be empty');
    const [namecheckErr, setNamecheckErr] = useState('The name field cannot be empty');
    const [emailcheckErr, setEmailcheckErr] = useState('The email field cannot be empty');
    const [validFrom, setValidFrom] = useState(false)
    useEffect(() => {
if(phonecheckErr || namecheckErr || emailcheckErr){
  setValidFrom(false);
  
  setClickCHErr('Fill in all the details')
}else{
  setValidFrom(true);
  setClickCHErr('')

}
    }, [phonecheckErr, namecheckErr, emailcheckErr]);
    const emailHandler = (e) => {
      setEmail(e.target.value);
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!re.test(String(e.target.value).toLowerCase())){
setEmailcheckErr('Your email is not correct')
      }else{
        setEmailcheckErr('')
      }
    }

    const nameHandler = (e) => {
      setName(e.target.value);
if(e.target.value.length < 2){
  setNamecheckErr('Name too short. The name must contain more than 2 characters');
  if(!e.target.value){
    setNamecheckErr('The name field cannot be empty');
  }
}else{
  setNamecheckErr('')
}
    }
    const namePhone = (e) => {
      setPhone(e.target.value);
      const num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if(e.target.value.match(/\d/g).length<10){
        setPhonecheckErr('Your phone is not correct')
              }else{
                setPhonecheckErr('')
    }
  }
const blurHandle = (e) => {
  switch (e.target.name){
    case 'user_name':
      setNamecheck(true);
      break
      case 'user_email':
        setEmailcheck(true);
        break
        case 'Phone': 
        setPhonecheck(true);
        break
       
  }
}

    return(
<form className='contact-form' type='submit' ref={form} onSubmit={(e) => {if(!validFrom){e.preventDefault();  setClickCH(true); setClickCHErr('Fill in all the details')}else{ setClickCHErr(''); sendEmail(form, e); setName(''); setPhone(''); setEmail('');}}}>
    <div className='input-fields'>
      {(namecheck && namecheckErr) && <div style={{color: 'red',}}>{namecheckErr}</div>}
      <input onChange={e => nameHandler(e)} onBlur={e => blurHandle(e)} type="text" name="user_name" className='input' placeholder='Name' value={name}/>
      {(emailcheck && emailcheckErr) && <div style={{color: 'red',}}>{emailcheckErr}</div>}
      <input onChange={e => emailHandler(e)} onBlur={e => blurHandle(e)} type="text" className='input' name="user_email" placeholder='Email Address' value={email}/>
      {(phonecheck && phonecheckErr) && <div style={{color: 'red',}}>{phonecheckErr}</div>}
      <input onChange={e => namePhone(e)} onBlur={e => blurHandle(e)} type="text"  className='input' name="Phone" placeholder='Phone' value={phone}/>
      <input type="text" className='input' name="Subject" placeholder='Subject'/>
    </div>
    <div className='msg'>
      <textarea placeholder='Message' name="message"></textarea>
      {(clickCH && clickCHErr) && <div style={{color: 'red',}}>{clickCHErr}</div>}
      <button name='but' className='btn' type='submit'>Send message</button>
    </div>
  </form>
    )
}