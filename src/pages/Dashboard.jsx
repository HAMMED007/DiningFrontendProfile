
import menu1 from '../images/menu-04.jpg';
import menu2 from '../images/menu-05.jpg';
import menu3 from '../images/menu-06.jpg';
import signature3 from '../images/signature-3.png';
import logo from '../components/logo/logo.png'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Dashboard(){
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
      }
      const dataParam = getQueryParameter("data");

// Parse the data back into a JavaScript object
const data = JSON.parse(dataParam);
console.log(data)
    return(
        <>
     <Navbar data={data}/>
<>
         

        
        
         <div className='homeslider'>
             <section id="full-slider">
 
                 <div className="slider-item-list">
 
                     <div className="title text-center pb-3">
                         <h2>Our</h2>
                         <h3>Chef's Choices</h3>
                         {/* <img src={tshap} alt="" /> */}
                     </div>
 
                     
 
                     
 
                     <div className="items">
 
                         <ul>
                             <li>
                                 <img src={menu1} alt="" />
                             </li>
                             <li>
                                 <div className="item-title">Steak-Shrimp Combo</div>
                                 <div className="item-price">$15.00</div>
                             </li>
                         </ul>
 
                     </div>
 
                     <div className="items">
 
                         <ul>
                             <li>
                                 <img src={menu2} alt="" />
                             </li>
                             <li>
                                 <div className="item-title">North Atlantic Haddock</div>
                                 <div className="item-price">$40.00</div>
                             </li>
                         </ul>
 
                     </div>
 
                     <div className="items">
 
                         <ul>
                             <li>
                                 <img src={menu3} alt="" />
                             </li>
                             <li>
                                 <div className="item-title">Ribeye Steak</div>
                                 <div className="item-price">$25.00</div>
                             </li>
                         </ul>
 
                     </div>
 
                 </div>
 
                 <div className="cf-slider">
 
                     <div className="slider slider-1">
                         <div className="container">
                             <div className="row">
 
                                 <div className="col-md-6 slider-text">
 
                                     <div className="content">
 
                                         <h2>Welcome to</h2>
                                         <h3>Choosy<span>Foody</span></h3>
 
                                         <p className="d-sm-none d-md-none d-lg-none d-xl-none">ChoosyFoody does the business where
                                             customers have the access as
                                             far-from-home everyday food needs like on a one-stop-shop.</p>
 
                                         <p className="d-none d-sm-block">ChoosyFoody does the business where customers have the
                                             access as
                                             far-from-home everyday food needs like on a one-stop-shop. Our commitment is to
                                             collect fresh,
                                             locally produced, organic vegetables.
                                         </p>
 
                                         <Link to="/CreateEvent">
                                             <button type="button" className="btn slider-btn shine">Create Events</button>
                                         </Link>
 
                                     </div>
 
                                 </div>
 
                             </div>
                         </div>
                     </div>
 
                     
 
                     
 
                 </div>
 
                 <div className="slider-arrows">
                     <p className="left">
                         <i className="fas fa-angle-left"></i>
                     </p>
                     <p className="right">
                         <i className="fas fa-angle-right"></i>
                     </p>
                 </div>
 
             </section>
 
 
 
             <section id="full-about-us" className="about-us">
 
                 <div className="container">
                     <div className="row">
 
                         <div className="col col-12 col-sm-12 col-md-12 col-lg-6 order-2 d-lg-none d-xl-none col-left">
 
                             <img src={signature3} alt="" className="img-fluid" />
 
                         </div>
 
                         <div className="col col-12 col-sm-12 col-md-12 col-lg-6 d-none d-lg-block col-left">
 
                             <img src={signature3} alt="" className="img-fluid" />
 
                         </div>
 
                         <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-right">
 
                             <div className="content">
 
                                 <h2>What we are</h2>
 
                                 <h3>Choosy Foody</h3>
 
                                 {/* <img src={tshap} alt="" /> */}
 
                                 <p className="headline">“We are open
                                     for breakfast, lunch and dinner”</p>
 
 
                                 <p className="d-md-none d-lg-none d-xl-none ">
                                     ChoosyFoody does the business where customers have the access as far-from-home everyday food
                                     needs like on a
                                     one-stop-shop. Our commitment is to collect fresh, locally produced, organic vegetables and
                                     natural seafood to make
                                     tasty dishes that you’ll not find anywhere. All of our products with the highest quality and
                                     value, healthy, nutritious.</p>
 
                                 <p className="d-none d-md-block d-xl-none">
                                     ChoosyFoody does the business where customers have the access as far-from-home everyday food
                                     needs like on a
                                     one-stop-shop. Our commitment is to collect fresh, locally produced, organic vegetables and
                                     natural seafood to make
                                     tasty dishes that you’ll not find anywhere. All of our products with the highest quality and
                                     value, healthy, nutritious.
                                     We give outstanding personal services at the lowest possible prices. Our remarkable raw bar
                                     offers a variety of Jumbo
                                     Lobsters, Natural Oysters, Crispy Cherrystones and Littleneck Clams. Environment here is
                                     clean, fun and friendly.</p>
 
                                 <p className="d-none d-xl-block">
                                     ChoosyFoody does the business where customers have the access as far-from-home everyday food
                                     needs like on a
                                     one-stop-shop. Our commitment is to collect fresh, locally produced, organic vegetables and
                                     natural seafood to make
                                     tasty dishes that you’ll not find anywhere. All of our products with the highest quality and
                                     value, healthy, nutritious.
                                     We give outstanding personal services at the lowest possible prices. Our remarkable raw bar
                                     offers a variety of Jumbo
                                     Lobsters, Natural Oysters, Crispy Cherrystones and Littleneck Clams. Environment here is
                                     clean, fun and friendly, so
                                     you, your friends and family feel very comfortable here. We promise to make ChoosyFoody the
                                     best place to not only for
                                     food, but also to get pleasure and as well as the best place to work for the employees.</p>
 
                                 <div className="phone">
                                     <p>Our Phone No.</p>
                                     <p>+1-123-456-7890</p>
                                 </div>
 
                                 <div className="days">
                                     <p>Opening Days</p>
                                     <p>Monday to Saterday</p>
                                 </div>
 
                                 <div className="hours">
                                     <p>Opening Hours</p>
                                     <p>7am to 11pm</p>
                                 </div>
 
                             </div>
 
                         </div>
 
                     </div>
                 </div>
 
             </section>
             <section id="full-newsletter" className="newsletter">
                 <div className="container-fluid">
                     <div className="row">
 
                         <div className="col-md-6  col-left">
 
                             <div className="content text-center">
 
                                 <h2>Subscribe</h2>
 
                                 <h3>Our Newsletter</h3>
 
                                 {/* <img src={tshap} alt="" /> */}
 
                                 <p>Subscribe to our newsletter
                                     and get attractive offers.</p>
 
                                 <form action="#">
 
                                     <div className="input-group">
                                         <input type="email" className="form-control" placeholder="Enter your email" />
                                         <span className="input-group-btn">
                                             <button className="btn" type="submit">Subscribe Now</button>
                                         </span>
                                     </div>
 
                                 </form>
 
                             </div>
 
                         </div>
 
                         <div className="col-md-6 col-right"></div>
 
                     </div>
                 </div>
             </section>
             <section id="full-footer" className="footer">
 
                 <div className="footer-top">
 
                     <div className="container">
 
                         <div className="row">
 
                             <div className="col col-12 col-sm-6 col-md-6 col-xl-4 col-1">
 
                                 <div className="row">
 
                                     <div className="col-md-12 logo">
                                         <p>
                                             <Link to="index.html"><img src={logo} alt="" /></Link>
                                         </p>
                                     </div>
 
                                     <div className="col-md-12">
 
                                         <div className="social">
                                             <p className="text">Around The Web</p>
                                             <ul>
                                                 <li>
                                                     <ul>
                                                         <li>
                                                             <Link className="facebook" to="">
                                                                 <i className="fab fa-facebook-f"></i>
                                                             </Link>
                                                         </li>
                                                         <li>
                                                             <Link className="twitter" to="">
                                                                 <i className="fab fa-twitter"></i>
                                                             </Link>
                                                         </li>
                                                         <li>
                                                             <Link className="instagram" to="">
                                                                 <i className="fab fa-instagram"></i>
                                                             </Link>
                                                         </li>
                                                         <li>
                                                             <Link className="behance" to="">
                                                                 <i className="fab fa-behance"></i>
                                                             </Link>
                                                         </li>
                                                         <li>
                                                             <Link className="linkedin" to="">
                                                                 <i className="fab fa-linkedin-in"></i>
                                                             </Link>
                                                         </li>
                                                         <li>
                                                             <Link className="youtube" to="">
                                                                 <i className="fab fa-youtube"></i>
                                                             </Link>
                                                         </li>
                                                     </ul>
                                                 </li>
                                             </ul>
 
                                         </div>
                                     </div>
                                 </div>
 
                             </div>
 
                             
 
                             <div className="col col-12 col-sm-6 col-md-6 col-xl-4 col-3">
 
                                 <div className="phone">
                                     <p>+1 234 567 890</p>
                                 </div>
 
                                 <div className="mail">
                                     <p>INFO@CHOOSYFOODY.COM</p>
                                 </div>
 
                                 <div className="address">
                                     <p>77 GROVE STREET</p>
                                     <p>SOUTH NEWYORK</p>
                                     <p>NEWYORK 10013</p>
                                     <p>UNITED STATES</p>
                                 </div>
 
                             </div>
 
                             <div className="col col-12 col-sm-6 col-md-6 col-xl-3 col-4">
 
                                 <p>Write something to us</p>
 
                                 
                                 
                                     <div className="input-group">
                                         <input type="name" className="form-control" placeholder="Your name" autocomplete="off" />
                                     </div>
 
                                     <div className="input-group">
                                         <input type="email" className="form-control" placeholder="Your email" autocomplete="off" />
                                     </div>
 
                                     <div className="input-group">
                                         <textarea className="form-control" name="text" id="text" placeholder="Your message"
                                             autocomplete="off"></textarea>
                                     </div>
 
                                     <div className="input-group">
                                         <span className="input-group-btn">
                                             <button className="btn" type="submit">Submit</button>
                                         </span>
                                     </div>
            
                             </div>
 
                         </div>
 
                     </div>
                 </div>
 
                 
 
             </section>
         </div>
         </>

        </>
    )
}
export default Dashboard;