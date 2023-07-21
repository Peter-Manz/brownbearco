import { Carousel} from "./Carousel";
import { coffeeFood } from "../Data/coffeeFood.js";
import coffeeOfBeans from '../Assets/stylized-cup-coffee - Copy.png';
import bagelImg from '../Assets/bagel.png';
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {


    useEffect(() => {
      Aos.init({ duration: 1500});
    },[]);
  
      return(
      <div className="content">
  
          <Carousel data = {coffeeFood}/>
          <div className="text-pic">
          <h4>Coffee</h4>
          <p>Coffee is, and always will be at the heart of Brown Bear; 
             it’s the drink that allows us to pause our hectic lives for a moment,
             and enjoy a slice of peace alone or with our loved ones. 
             We aim to give you the perfect cup of joe to elevate this moment, 
             so we work alongside a Liverpool roaster that is equally as fanatical about using high quality, 
             selectively picked, sustainably sourced coffee beans. We’ve created a range of Brown Bear Coffee Beans,
             including those with sweet American undertones of caramel, brown sugar, dark chocolate and toffee sweetness.
             Not only this, but our coffee has character.
             </p>
             <img data-aos="fade-up" src={coffeeOfBeans} className="mug-pic"></img>
             </div>
             <div data-aos="fade-up" className="text-pic">
              <h4>Bagels</h4>
          <p>Our bagels are made in the Brown Bear Bakery at the back of the shop.
            Not only do they have our personal touch and care poured into every one of them, but the smell of freshly baked bagel dough is heavenly.
            Now you can’t get any fresher than that!</p>
            <img data-aos="fade-up" src={bagelImg} className="bagel-pic"></img>
            </div>
          <br></br>
          <hr></hr>
          <hr></hr>
          <h4>Monthly Events</h4>
          <Carousel data={coffeeFood}/>
          <h4 data-aos="fade-up" >Paint and Prosecco</h4>
          <p data-aos="fade-up" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. 
            Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
          <h4 data-aos="fade-up" >Paint and Prosecco</h4>
          <p data-aos="fade-up" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. 
            Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
        </div>
      )
  }