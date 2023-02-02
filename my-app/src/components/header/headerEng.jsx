import { BsSun } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function HeaderEng() {



    return(
        <header>
        <nav>
         <h1>ST-<span>Studio</span></h1>
<ul>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/eng/about'>About us</Link></li>
  <li><Link to='/eng/servise'>Services</Link></li>
  <li><Link to='/eng/contact'>Contact</Link></li>
</ul>
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