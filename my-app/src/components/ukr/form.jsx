
import { useRef, useState, useEffect} from 'react';
import sendEmail from '../../function/sendMessage'

export default function Form() {
    const form = useRef();
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonecheck, setPhonecheck] = useState(false);
    const [namecheck, setNamecheck] = useState(false);
    const [clickCH, setClickCH] = useState(false);
    const [clickCHErr, setClickCHErr] = useState('Заповніть усі поля');
    const [emailcheck, setEmailcheck] = useState(false);
    const [phonecheckErr, setPhonecheckErr] = useState('Ваш телефон некоректний');
    const [namecheckErr, setNamecheckErr] = useState('Поле імені не може бути порожнім');
    const [emailcheckErr, setEmailcheckErr] = useState('Поле електронної пошти не може бути порожнім');
    const [validFrom, setValidFrom] = useState(false)
    useEffect(() => {
      if(phonecheckErr || namecheckErr || emailcheckErr){
        setValidFrom(false);
        
        setClickCHErr('Заповніть усі поля')
      }else{
        setValidFrom(true);
        setClickCHErr('')
      
      }
          }, [phonecheckErr, namecheckErr, emailcheckErr]);
          const emailHandler = (e) => {
            setEmail(e.target.value);
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!re.test(String(e.target.value).toLowerCase())){
      setEmailcheckErr('Ваш email не коректний')
            }else{
              setEmailcheckErr('')
            }
          }
      
          const nameHandler = (e) => {
            setName(e.target.value);
      if(e.target.value.length < 2){
        setNamecheckErr("Ім'я занадто коротка. Назва має містити більше 2 символів");
        if(!e.target.value){
          setNamecheckErr("Поле імені не може бути порожнім");
        }
      }else{
        setNamecheckErr('')
      }
          }
          const namePhone = (e) => {
            setPhone(e.target.value);
            const num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            if(e.target.value.match(/\d/g).length<10){
              setPhonecheckErr('Ваш телефон некоректний')
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

        <form className='contact-form' type='submit' ref={form} onSubmit={(e) => {if(!validFrom){e.preventDefault();  setClickCH(true); setClickCHErr('Заповніть усі деталі')}else{ setClickCHErr(''); sendEmail(form, e); setName(''); setPhone(''); setEmail('');}}}>
    <div className='input-fields'>
    {(namecheck && namecheckErr) && <div style={{color: 'red',}}>{namecheckErr}</div>}
      <input onChange={e => nameHandler(e)} onBlur={e => blurHandle(e)} type="text" name="user_name" className='input' placeholder="Ім'я" value={name}/>
      {(emailcheck && emailcheckErr) && <div style={{color: 'red',}}>{emailcheckErr}</div>}
      <input onChange={e => emailHandler(e)} onBlur={e => blurHandle(e)} type="text" className='input' name="user_email" placeholder='Email адрес' value={email}/>
      {(phonecheck && phonecheckErr) && <div style={{color: 'red',}}>{phonecheckErr}</div>}
      <input onChange={e => namePhone(e)} onBlur={e => blurHandle(e)} type="text" className='input' name="Phone" placeholder='Телефон' value={phone}/>
      <input type="text" className='input' name="Subject" placeholder='Тема'/>
    </div>
    <div className='msg'>
      <textarea placeholder='Повідомлення' name="message"></textarea>
      {(clickCH && clickCHErr) && <div style={{color: 'red',}}>{clickCHErr}</div>}
      <button className='btn' type='submit'>Відправити повідомлення</button>
    </div>
  </form>
    )
}