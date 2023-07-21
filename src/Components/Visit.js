import ShopPic from '../Assets/BrownBearFrontOfShop.png';

import RattleSnakeMtn from '../Assets/CarterMtn.png';

export default function Visit() {
    return(
    <div className="visit-content">
      <img src={ShopPic} className='shop-pic'></img>
        <h4>Visit</h4>
        <h3 className='visit-title'>Coffee Shop</h3>
        <p>Brown Bear Coffee, 45 Thingwall Road, Irby, Wirral, CH61 3UE</p>
        <h3 className='visit-title' >Hours of Operation</h3>
        <p>8:00am - 4:30pm</p>
        <h3 className='visit-title' >Phone</h3>
        <p>0151 936 3213</p>
      <iframe  className='shop-pic' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.4607681520597!2d-3.120176023477499!3d53.35290827229122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b29e7dc22865b%3A0x2ed104029163d6d4!2sBrown%20Bear%20Coffee!5e0!3m2!1sen!2suk!4v1689781268009!5m2!1sen!2suk" 
      width="900" height="450" 
      style={{ border: "0" }}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    )
}