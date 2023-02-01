import video from '../../../../media/1.mp4'
import one from '../../../../media/2.jpg'
import two from '../../../../media/3.png'
import thre from '../../../../media/4.png'
import four from '../../../../media/5.jpg'
import { BsSun } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { SiReact, SiRedux, SiJavascript,SiHtml5,SiCsswizardry,SiNodemon,SiMongodb,SiMaterialui,SiGithub } from 'react-icons/si';
import "@fontsource/quicksand";
import "@fontsource/itim"
import { CardMedia, Card, Typography, Box} from '@mui/material';
import Partisipals from './partisipals'
import { height } from '@mui/system'

export default function FirstBlock() {
  const form = useRef();
  const socialIcon = {
    fontSize: 50,
    color: '#05c495',
  }
  const SERVICE_ID = "service_xh5ymdk";
  const TEMPLATE_ID = "template_zqbdjvp";
  const USER_ID = "My9e5IjpQ2yIY3t12";
  
  const sendEmail = (e) => {
    
    e.preventDefault();
  
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
      e.target.reset()
  };
  



   
    return(

       <div className='headerStyle'>
        <Partisipals/>
           <div className='containerHeader'>
        <nav>
         <h1>ST-<span>Studio</span></h1>
<ul>
  <li><a href='/'>Home</a></li>
  <li><a href='#about'>About us</a></li>
  <li><a href='#prodList'>Services</a></li>
  <li><a href='/'>Contact</a></li>
</ul>
<div className='lang'>
<h4><a href='/'>ENG</a></h4>
<h4><a href='/sw'>УКР</a></h4>
<div className='iconWrap'>
<BsSun className='icon'/>
</div>
</div>
</nav>
<section id='titleFirst'>
        <div className='titleFirst'>
        <h1>We create effective websites for your business</h1>
        </div>
        <a href='#prodList'><button>Start</button></a>  
       </section>
       <a name='prodList'></a>
       <section id='productList' >
        <h2>Our services</h2>
        <div className='productList'>
        <div>
          <h1>Landing page</h1>
          <h2>01</h2>
          <h3>Landing</h3>
          <p>Landing page with progressive design and good functionality.</p>
        </div>
        <div>
        <h1>Business website</h1>
          <h2>02</h2>
          <h3>Business</h3>
          <p>A website for your business with maximum implementation of your needs.</p>
        </div>
        <div>
        <h1>Online store</h1>
          <h2>03</h2>
          <h3>Online</h3>
          <p>We will create your ideal platform for online sales.</p>
        </div>
        <div>
        <h1>Blog</h1>
          <h2>04</h2>
          <h3>Blog</h3>
          <p>Want to share your thoughts? No problem, we will create a blog!</p>
        </div>
        <div>
          <h1>Progressive design</h1>
          <h2>05</h2>
          <h3>Design</h3>
          <p>Our design team will develop a unique design for your brand</p>
          </div>
        <div>
        <h1>Search optimization</h1>
          <h2>06</h2>
          <h3>Optimization</h3>
          <p>Your site will be optimized as much as possible for search engines</p>
        </div>
        </div>
      
       </section>
      
       <section id="about">
       <h2>About us</h2>
        <div className='about'>
        
        <h1>
        We are a team of professionals focused on the maximum result for the client.
        We strive to create not just impressive, but the most useful and effective things.
        We work for results, because the success of our clients is our success!
Therefore, we develop exclusively high-quality services that ensure business development.
In development, we use advanced technologies to ensure maximum performance of your product
        </h1>
        </div>
        <div className='technologies'>
        <h3>Technologies</h3>
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
      <h2>Get it touch whis us</h2>
      <address>
        <p>
          <strong>ST-Studio</strong>
          <br/>
          Lvivska  street
          <br/>
          78560 Lviv
          <br/>
          Ukraine
        </p>
      </address>
      <br/>
      <br/>
      <p>
      <strong>Phone:</strong>
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
  <form className='contact-form' type='submit' ref={form} onSubmit={sendEmail}>
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
       </section>
      </div>
      
      
   
     
       </div>

    )
}