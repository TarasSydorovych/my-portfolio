import Footer from "../footer/footer";
import HeaderUkr from "../header/headerUkr";
import Partisipals from "../partisipals";



export default function ServiseUkr() {


    return(
        <>
        <Partisipals/>
        <div className='containerHeader'>
        <HeaderUkr/>

        <section style={{height: '110vh'}} id='productList' >
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
       <Footer/>
        </div>
        
        
        </>
    )
}