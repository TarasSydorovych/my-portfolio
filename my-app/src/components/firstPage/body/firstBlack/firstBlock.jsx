import video from '../../../../media/1.mp4'
import one from '../../../../media/2.jpg'
import two from '../../../../media/3.png'
import thre from '../../../../media/4.png'
import four from '../../../../media/5.jpg'
import { BsSun } from "react-icons/bs";
import { SiReact, SiRedux, SiJavascript,SiHtml5,SiCsswizardry,SiNodemon,SiMongodb,SiMaterialui,SiGithub } from 'react-icons/si';
import "@fontsource/quicksand";
import "@fontsource/itim"
import { CardMedia, Card, Typography, Box} from '@mui/material';
import Partisipals from './partisipals'
import { height } from '@mui/system'

export default function FirstBlock() {
   
   
    return(

       <div className='headerStyle'>
        <Partisipals/>
           <div className='containerHeader'>
        <nav>
         <h1>ST-<span>Studio</span></h1>
<ul>
  <li><a href='/'>Home</a></li>
  <li><a href='/'>About us</a></li>
  <li><a href='/'>Services</a></li>
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

        </div>
       </section>
      </div>
      
      
   
     
       </div>

    )
}