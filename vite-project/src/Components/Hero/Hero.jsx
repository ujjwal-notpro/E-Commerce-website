import React from 'react'
import './hero.css'
import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png";
import hero_image from "../../Assets/hero_image.png";

function Hero() {
  return (
    <div className='Hero'   >
      <div className="Hero-left">
        <h2>NEW SEASONAL COLLECTION</h2>
        <div>
        <div className="Hero-hand-icon">
        <p>NEW</p>
        <img src={hand_icon} alt="" />
      </div>
      <p>COLLECTION</p>
      <p>   FOR EVERYONE</p>
      </div>
      <div className="Hero-latest-btn">
        <div>
            LATEST COLLECTION
        </div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
        <div className="Hero-right">
          <img src={hero_image} alt="" />
        </div>
    </div>
  );
}

export default Hero
