import { Carousel } from "./Carousel";
import { coffeeFood } from "../Data/coffeeFood.js";
import coffeeOfBeans from '../Assets/stylized-cup-coffee - Copy.png';
import bagelImg from '../Assets/bagel.png';
import pancakesImg from '../Assets/Pancakes.png';
import bearCoffeeArt from '../Assets/bearcoffeeart.png'
import bearFrenchToast from '../Assets/BearFrenchToast.png';
import eggsAvoHallImg from '../Assets/EggsAvoandHallumi.png'
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
      <h4>Coffee</h4>
      <div className="content-card">
        <img data-aos="fade-up" src={bearCoffeeArt} className="content-pic"></img>
        <div className="content-text">
        <h5 data-aos="fade-up">Flate White</h5>
          <p data-aos="fade-up">Coffee is, and always will be at the heart of Brown Bear;
            it’s the drink that allows us to pause our hectic lives for a moment,
            and enjoy a slice of peace alone or with our loved ones.</p>
        </div>
      </div>

      <div className="content-card">
        <img data-aos="fade-up" src={coffeeOfBeans} className="mug-pic"></img>
        <div className="content-text">
          <p data-aos="fade-up">We aim to give you the perfect cup of joe to elevate this moment,
            so we work alongside a Liverpool roaster that is equally as fanatical about using high quality,
            selectively picked, sustainably sourced coffee beans.
            We’ve chosen coffee beans with sweet American undertones of caramel, brown sugar, dark chocolate + toffee sweatness.
            Our Coffee has character and is loved by our Customers.
          </p>
        </div>
      </div>

      <h4>Bagels</h4>
      <div className="content-card">
        <img data-aos="fade-up" src={bagelImg} className="bagel-pic"></img>
        <div className="content-text">
          <p data-aos="fade-up">Our bagels are made in the Brown Bear Bakery at the back of the shop.
            Not only do they have our personal touch and care poured into every one of them, but the smell of freshly baked bagel dough is heavenly.
            Now you can’t get any fresher than that! </p>
        </div>
      </div>

      <div className="content-card">
        <img data-aos="fade-up"src={bagelImg} className="content-pic"></img>
        <div className="content-text">
          <p data-aos="fade-up">Our twist on a teacake is our much loved cinnamon raisen bagel, lightly toasted + server with butter.
            Or go for our signature Brown Bear Bagel (plain) on it's own or as part of our lunch menu;
            BLT, Rueben, Cheeseburger bagel. The list is endless!</p>
        </div>
      </div>

      <h4>All Day Breakfast</h4>
      <div className="content-card">
        <img data-aos="fade-up" src={pancakesImg} className="content-pic"></img>
        <div className="content-text">
          <h5 data-aos="fade-up">Bear French Toast</h5>
          <p data-aos="fade-up">Crispy Bacon, Maple Syrup & Cinnamon or Vanilla Yogurt & Fruit Compote</p>
        </div>
      </div>

      <div className="content-card">
        <img data-aos="fade-up" src={bearFrenchToast} className="content-pic"></img>
        <div className="content-text">
          <h5 data-aos="fade-up">American Pancakes</h5>
          <p data-aos="fade-up">Made Fresh, using Our Secret American Inspired Recipe. Lather your fluffy pancakes with Maple Syrup</p>
        </div>
      </div>

      <div className="content-card">
        <img data-aos="fade-up" src={eggsAvoHallImg} className="content-pic"></img>
        <div className="content-text">
          <h5 data-aos="fade-up" >Eggs, Avocado, & Grilled Halloumi (V)</h5>
          <p data-aos="fade-up" >Poached Eggs, Avocado and Grilled Halloumi served on Sourdough Toast.
            Topped with Herbs or Chilli flakes.</p>
        </div>
      </div>

      <h4>Try our Lunch</h4>
      <div className="content-card">
        <img data-aos="fade-up" src={pancakesImg} className="content-pic"></img>
        <div className="content-text">
          <h5 data-aos="fade-up">Bear French Toast</h5>
          <p data-aos="fade-up">Crispy Bacon, Maple Syrup & Cinnamon or Vanilla Yogurt & Fruit Compote</p>
        </div>
      </div>

      <div className="content-card">
        <img data-aos="fade-up" src={bearFrenchToast} className="content-pic"></img>
        <div className="content-text">
          <h5 data-aos="fade-up">American Pancakes</h5>
          <p data-aos="fade-up">Made Fresh, using Our Secret American Inspired Recipe. Lather your fluffy pancakes with Maple Syrup</p>
        </div>
      </div>

      <div className="content-card">
        <img data-aos="fade-up" src={eggsAvoHallImg} className="content-pic"></img>
        <div className="content-text">
          <h5 data-aos="fade-up">Eggs, Avocado, & Grilled Halloumi (V)</h5>
          <p data-aos="fade-up">Poached Eggs, Avocado and Grilled Halloumi served on Sourdough Toast.
            Topped with Herbs or Chilli flakes.</p>
        </div>
      </div>
     

    </div>
  )
}