import { Carousel } from "./Carousel";
import { coffeeFood } from "../Data/coffeeFood.js";
import coffeeOfBeans from '../Assets/stylized-cup-coffee - Copy.png';
import bagelImg from '../Assets/bagel.png';
import pancakesImg from '../Assets/Pancakes.png';
import waffleImg from '../Assets/waffles.png';
import breakfastImg from '../Assets/breakfast.png'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {


  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="content">

      <Carousel data={coffeeFood} />
      <div className="text-pic">
      <h4>The Coffee</h4>
        <img data-aos="fade-up" src={coffeeOfBeans} className="mug-pic"></img>
        
        <p>Coffee is, and always will be at the heart of Brown Bear;
          it’s the drink that allows us to pause our hectic lives for a moment,
          and enjoy a slice of peace alone or with our loved ones.</p>
          <img data-aos="fade-up" src={coffeeOfBeans} className="mug-pic"></img>
        <p>
          We aim to give you the perfect cup of joe to elevate this moment,
          so we work alongside a Liverpool roaster that is equally as fanatical about using high quality,
          selectively picked, sustainably sourced coffee beans.    
          We’ve chosen coffee beans with sweet American undertones of caramel, brown sugar, dark chocolate + toffee sweatness.
          Our Coffee has character and is loved by our Customers.
        </p>
      </div>
      <div data-aos="fade-up" className="text-pic">
        <h4>The Bagels</h4>        
        <img data-aos="fade-up" src={bagelImg} className="bagel-pic"></img>
        <p>Our bagels are made in the Brown Bear Bakery at the back of the shop.
          Not only do they have our personal touch and care poured into every one of them, but the smell of freshly baked bagel dough is heavenly.
          Now you can’t get any fresher than that! </p>
        <img data-aos="fade-up" src={bagelImg} className="bagel-pic"></img>
        <p>Our twist on a teacake is our much loved cinnamon raisen bagel, lightly toasted + server with butter.
          Or go for our signature Brown Bear Bagel (plain) on it's own or as part of our lunch menu;
          BLT, Rueben, Cheeseburger bagel. The list is endless!</p>
      </div>
      <div data-aos="fade-up" className="text-pic">
        <h4>The Breakfast</h4>        
        <img data-aos="fade-up" src={waffleImg} className="bagel-pic"></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam vitae accumsan augue, in pharetra enim. Nam laoreet feugiat mi sit amet interdum.
           Vivamus ligula tellus, volutpat sed elit eu, tempus pharetra enim. Nulla sed consequat nisi.</p>
        <img data-aos="fade-up" src={pancakesImg} className="bagel-pic"></img>
        <p>Nam venenatis purus quam, et tincidunt massa malesuada et. Sed non urna mattis, pulvinar urna quis, egestas elit.
           Duis vulputate, enim vel fermentum mattis, arcu felis mattis ante, eget dictum quam urna at nibh. 
           Sed mauris arcu, ultricies eget sapien ac, euismod consectetur nisl.</p>
         <img data-aos="fade-up" src={breakfastImg} className="bagel-pic"></img>
        <p>Nam venenatis purus quam, et tincidunt massa malesuada et. Sed non urna mattis, pulvinar urna quis, egestas elit.
           Duis vulputate, enim vel fermentum mattis, arcu felis mattis ante, eget dictum quam urna at nibh. 
           Sed mauris arcu, ultricies eget sapien ac, euismod consectetur nisl.</p>
      </div>
    </div>
  )
}