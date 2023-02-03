

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { SiReact, SiRedux, SiJavascript,SiHtml5,SiCsswizardry,SiNodemon,SiMongodb,SiMaterialui,SiGithub } from 'react-icons/si';
import "@fontsource/quicksand";
import "@fontsource/itim"
import { CardMedia, Card, Typography, Box} from '@mui/material';
import Partisipals from '../partisipals'
import { height } from '@mui/system'
import { Link } from "react-router-dom";
import HeaderUkr from "../header/headerUkr";
import sendEmail from '../../function/sendMessage'
import ContaktUs from './contaktUs';
import Form from './form';
export default function UkrVersion() {
  const form = useRef();


   
    return(

       <div className='headerStyle'>
        <ContaktUs/>
        <Partisipals/>
           <div className='containerHeader'>
          <HeaderUkr/>
<section id='titleFirst'>
        <div className='titleFirst'>
        <h1>Ми створюємо ефективні сайти для вашого бізнесу</h1>
        </div>
        <a href='#prodList'><button>Почати</button></a>  
       </section>
       <a name='prodList'></a>
       <section id='productList' >
        <h2>Наші Послуги</h2>
        <div className='productList'>
        <div>
          <h1>Landing page</h1>
          <h2>01</h2>
          <h3>Landing</h3>
          <p>Landing page з прогресивним дизайном і хорошою функціональністю.</p>
        </div>
        <div>
        <h1>Бізнес-сайт</h1>
          <h2>02</h2>
          <h3>Business</h3>
          <p>Сайт для вашого бізнесу з максимальною реалізацією ваших потреб.</p>
        </div>
        <div>
        <h1>Інтернет-магазин</h1>
          <h2>03</h2>
          <h3>Online</h3>
          <p>Ми створимо ідеальну платформу для ваших онлайн-продажів.</p>
        </div>
        <div>
        <h1>Блог</h1>
          <h2>04</h2>
          <h3>Blog</h3>
          <p>Хочете поділитися своїми думками? Не біда, ми створимо блог!</p>
        </div>
        <div>
          <h1>Прогресивний дизайн</h1>
          <h2>05</h2>
          <h3>Design</h3>
          <p>Наша команда дизайнерів розробить унікальний дизайн для вашого бренду.</p>
          </div>
        <div>
        <h1>Пошукова оптимізація</h1>
          <h2>06</h2>
          <h3>Optimization</h3>
          <p>Ваш сайт буде максимально оптимізований для пошукових систем.</p>
        </div>
        </div>
      
       </section>
      
       <section id="about">
       <h3>Про нас</h3>
        <div className='about'>
        <div className='block'>
          <div className='minblock'>
          <h2>01</h2>
          </div>
          <h1>Досвід</h1>
          <p> Ми команда професіоналів, націлена на максимальний результат для клієнта.
         Ми прагнемо створювати не просто вражаючі, а максимально корисні та ефективні речі.
         Ми працюємо на результат, адже успіх наших клієнтів – наш успіх! </p>
        </div>
        <div className='block'>
        <div className='minblock'>
          <h2>02</h2>
          </div>
          <h1>Технології</h1>
          <p> Ми використовуємо передові технології в розробці. Завдяки цьому ваш веб-додаток буде максимально швидким і візуально привабливим для користувача.
           Ви можете переглянути список технологій нижче.
          </p>
        </div>
        <div className='block'>
        <div className='minblock'>
          <h2>03</h2>
          </div>
          <h1>Комунікація</h1>
          <p>Ми повністю відкриті до будь-яких потреб клієнта. Спілкування з клієнтом відбувається на всіх етапах розробки для досягнення максимального результату. Девіз нашої компанії - задоволений клієнт, задоволені ми.</p>
        </div>
       
        </div>
        <div className='technologies'>
        <h3>Технології</h3>
        <a name='about'></a>
        <div className='techIcon'>
<SiHtml5 style={{color:'#dd4b25'}} className='icon'/>
<SiCsswizardry style={{color:'#254bdd'}} className='icon'/>
<SiJavascript style={{color:'#efd81d'}} className='icon'/>
<SiReact style={{color:'#5ed2f2'}} className='icon'/>
<SiRedux style={{color: '#7248b6'}} className='icon'/>
<SiNodemon style={{color: '#4e9543'}} className='icon'/>
<SiMongodb style={{color: '#006548'}} className='icon'/>
<SiMaterialui style={{color: '#0079f3'}} className='icon'/>
<SiGithub style={{color: 'white'}} className='icon'/>
        </div>
        </div>
       </section>
       <section id='mailSend'>
       <div className='containerInfo'>

<div className='columInfo'>
    <div className='columInfoTe'>
      <h2>Зверніться до нас</h2>
      <address>
        <p>
          <strong>ST-Studio</strong>
          <br/>
         вулиця Львівська
          <br/>
          78560 Львів
          <br/>
          Україна
        </p>
      </address>
      <br/>
      <br/>
      <p>
      <strong>Телефон:</strong>
      &nbsp;
      <a href='tel:+380937246193'>   +380937246193</a>
          <br/>
          <strong>Email:</strong>
          &nbsp;
          <a href='mailto:jakzadarom2@gmail.com'>   jakzadarom2@gmail.com</a>
          <br/>
       
      </p>
  

    </div>
</div>
<div className='wrapper'>
 <Form/>
</div>
</div>
       </section>
       <footer>
     
            <h6>
            © Copyright 2022 St-Studio. All rights reserved.
            </h6>
      
       </footer>
      </div>
      
      
   
     
       </div>

    )
}