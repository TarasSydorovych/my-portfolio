
import { BsSun } from "react-icons/bs";
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { SiReact, SiRedux, SiJavascript,SiHtml5,SiCsswizardry,SiNodemon,SiMongodb,SiMaterialui,SiGithub } from 'react-icons/si';
import "@fontsource/quicksand";
import "@fontsource/itim"
import { CardMedia, Card, Typography, Box} from '@mui/material';
import Partisipals from '../partisipals'
import { height } from '@mui/system'
import { Link } from "react-router-dom";
import sendEmail from '../../function/sendMessage'
import HeaderEng from "../header/headerEng";
import ContaktUs from "./contaktUs";
import Form from "./form";
import Up from "../up";
import { useState } from "react";

export default function FirstBlock() {
  const form = useRef();
  const [show, setShow] = useState(false);
  useEffect(()=>{

    const handlscroll = () => {
      if(window.scrollY > 640){
        setShow(true)
      }else{
        setShow(false)
      }
    }
    document.addEventListener('scroll', handlscroll)
    return () => {
      document.removeEventListener('scroll', handlscroll)
    }
    },[])

   
    return(

       <div className='headerStyle'>
        <ContaktUs/>
        {show &&
        <Up />
       
        }
           <div className='containerHeader'>
           <a name='#/'></a>
           <HeaderEng/>
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
       <h3>About us</h3>
        <div className='about'>
        <div className='block'>
          <div className='minblock'>
          <h2>01</h2>
          </div>
          <h1>Experience</h1>
          <p> We are a team of professionals focused on the maximum result for the client.
        We strive to create not just impressive, but the most useful and effective things.
        We work for results, because the success of our clients is our success! </p>
        </div>
        <div className='block'>
        <div className='minblock'>
          <h2>02</h2>
          </div>
          <h1>Technologies</h1>
          <p> We use advanced technologies in development. Thanks to this, your web application will be as fast as possible and visually attractive to the user.
          You can view the list of technologies below.
          </p>
        </div>
        <div className='block'>
        <div className='minblock'>
          <h2>03</h2>
          </div>
          <h1>Communication</h1>
          <p>We are fully open to any client's needs. Communication with the client takes place at all stages of development to achieve the maximum result. The motto of our company is a satisfied client, we are satisfied.</p>
        </div>
       
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