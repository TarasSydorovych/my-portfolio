import { BsSun } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function HeaderUkr() {



    return(
        <header>
        <nav>
         <h1>ST-<span>Studio</span></h1>
<ul>
  <li><Link to='/ukr'>Головна</Link></li>
  <li><Link to='/ukr/about'>Про нас</Link></li>
  <li><Link to='/ukr/servise'>Послуги</Link></li>
  <li><Link to='/ukr/contact'>Контакти</Link></li>
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