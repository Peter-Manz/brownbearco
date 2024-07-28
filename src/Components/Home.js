import { Carousel } from "./Carousel";
import { coffeeFood } from "../Data/coffeeFood.js";
import bagelImg from '../Assets/GreatAmericanBagel.jpg';
import bagelCinnamon from '../Assets/CinnamonRaisenBagel.jpg'
import bearFrenchToast from '../Assets/BBFrenchToast.jpg';
import bearCoffeeArt from '../Assets/bearcoffeeart.jpg'
import bearPancakes from '../Assets/BearPancakes.jpg';
import eggsAvoHallImg from '../Assets/EggsAvoandHallumi.jpg'
import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <div className="content">
      <Carousel data={coffeeFood} />

      <div className="content-text">
        <h4>Welcome to Brown Bear!</h4>
        <p>Coffee is, and always will be at the heart of Brown Bear;
          it’s the drink that allows us to pause our hectic lives for a moment,
          and enjoy a slice of peace alone or with our loved ones.</p>
      </div>
      <hr></hr>

      <h4>Coffee</h4>
      <div className="content-card">
        <img src={bearCoffeeArt} className="content-pic"></img>
        <div className="content-text">
          <h5 >Flat White</h5>
          <p>We aim to give you the perfect cup of joe to elevate this moment,
            so we work alongside a Liverpool roaster that is equally as fanatical about using high quality,
            selectively picked, sustainably sourced coffee beans.
            We’ve chosen coffee beans with sweet American undertones of caramel, brown sugar, dark chocolate + toffee sweetness.
            Our Coffee has character and is loved by our Customers.
          </p>
        </div>
      </div>

      <h4>Bagels</h4>
      <div className="content-card">
        <img  src={bagelImg} className="content-pic"></img>
        <div className="content-text">
          <h5 >Great American Bagel</h5>
          <p >Our bagels are made in the Brown Bear Bakery at the back of the shop.
            Not only do they have our personal touch and care poured into every one of them, but the smell of freshly baked bagel dough is heavenly.
            Now you can’t get any fresher than that! </p>
        </div>
      </div>

      <div className="content-card">
        <img src={bagelCinnamon} className="content-pic"></img>
        <div className="content-text">
          <h5>Cinnamon Raisin Bagel</h5>
          <p>Our twist on a teacake is our much loved cinnamon raisin bagel, lightly toasted + server with butter.
            Or go for our signature Brown Bear Bagel (plain) on its own or as part of our lunch menu;
            BLT, Rueben, Cheeseburger bagel. The list is endless!</p>
        </div>
      </div>

      <h4>Brunch until 3pm</h4>

      <div className="content-card">
        <img src={bearPancakes} className="content-pic"></img>
        <div className="content-text">
          <h5>American Pancakes</h5>
          <p>Made Fresh, using Our Secret American Inspired Recipe. 
          Lather your fluffy pancakes with some of our Topping Options. </p>
          <p>
          Choices: Maple Syrup & Bacon, Nutella & Cream, or Fresh Fruit, Vanilla Yoghurt & Honey.</p>
        </div>
      </div>

      <div className="content-card">
        <img src={eggsAvoHallImg} className="content-pic"></img>
        <div className="content-text">
          <h5>Eggs, Avocado, & Grilled Halloumi (V)</h5>
          <p>Poached Eggs, Avocado and Grilled Halloumi served on Sourdough Toast.
            Topped with Herbs or Chilli flakes.</p>
        </div>
      </div>
      <div className="content-card">
        <img src={bearFrenchToast} className="content-pic"></img>
        <div className="content-text">
          <h5>Bear French Toast</h5>
          <p>Crispy Bacon, Maple Syrup & Cinnamon or Vanilla Yogurt & Fruit Compote</p>
        </div>
      </div>

      <div className="menu-link-container">
        <Link className="menu-link" to="/Menus">VIEW OUR MENUS</Link>
      </div>
    </div>
  )
}