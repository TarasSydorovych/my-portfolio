import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link} from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default  function HeaderEng() {
const [windowDimensions, setWindowDimensions] = useState(true)
const [menu, setMenu] = useState(false)
useEffect(() => {
 
  function handleResize() {
   
    if(window.innerWidth < 874){

    setWindowDimensions(false);
  }else{
    setWindowDimensions(true);
  }
  }
  handleResize()
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

    return(
        <header>
        <nav>
        {windowDimensions === false &&
        <div className="outLineMenu">
  <AiOutlineMenu  onClick={() => setMenu(true)}/>
  </div>
 
}
{menu &&
<div className="menu">
<AiOutlineClose style={{alignSelf: 'flex-end', margin:'5%', fontSize: '3em'}} onClick={() => setMenu(false)}/>
<ul className="ulMobile">
  <li className="liMobile"><Link to='/'>Home</Link></li>
  <li className="liMobile"><Link to='/eng/about'>About us</Link></li>
  <li className="liMobile"><Link to='/eng/servise'>Services</Link></li>
  <li className="liMobile"><Link to='/eng/contact'>Contact</Link></li>
</ul>
</div>

}
         <h1>WebUi-<span>Studio</span></h1>
         {windowDimensions &&
<ul>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/eng/about'>About us</Link></li>
  <li><Link to='/eng/servise'>Services</Link></li>
  <li><Link to='/eng/contact'>Contact</Link></li>
</ul>
}

<div className='lang'>
<h4><Link to='/eng'>ENG</Link></h4>
<h4><Link to='/ukr'>УКР</Link></h4>
<div className='iconWrap'>
<BsSun className='icon'/>
</div>
</div>
</nav>
</header>
    )
}
