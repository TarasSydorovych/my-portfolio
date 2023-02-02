import Footer from "../footer/footer";
import HeaderEng from "../header/headerEng";
import Partisipals from "../partisipals";



export default function ServiceEng() {


    return(
        <>
    <Partisipals/>
    <div className='containerHeader'>
        <HeaderEng/>
    <section style={{height: '110vh'}} id='productList' >
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
       <Footer/>
        </div>
       
        </>
    )
}