import RattleSnakeMtn from '../Assets/CarterMtn.jpg';
import CodyTown from '../Assets/CodyWyTown.jpg';
import BuffaloBillDam from '../Assets/buffalobilldam.jpg';
import React from 'react';

export default function Story() {

  return(
    <div className="visit-content">
      <h4>The Origin of Brown Bear</h4>
      <img src={CodyTown} className='story-pic'></img>
      <p >Okay, bare with me. We’re transporting back to 2018 (a much simpler time), all I could think about was traveling the world. 
            After doing some classic soul searching in South East Asia, I went to see family friends in Cody, Wyoming. 
            It’s hard to put into words how much this small American town inspired and impacted every part of my life. </p>
           
      <img src={RattleSnakeMtn} className="story-pic"></img>
      <p>
            I embraced every aspect of the Wyoming Cowboy life; the horseback riding up heart mountain, sharing the town with deer and elk, 
            attending the much-loved rodeo, drinking at the Silver Dollar western bar and of course, after much anticipation, spotting my first mama bear and cub. 
            I have never experienced so much love and acceptance from perfect strangers.</p>
      <img src={BuffaloBillDam} className='story-pic'></img>
      <p>Not only this, but Cody is beautifully intertwined with extraordinary wildlife and indescribably beautiful surroundings. 
            We want to bring an essence of Cody Wyoming to our local community. 
            Western America with its indulgent, moreish flavours, breathtaking landscape and superb hospitality, inspires us to provide comforting and enticing food, 
            treat our environment with care and serve you like family.</p>
   </div>

  )
}