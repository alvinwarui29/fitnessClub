import "./Hero.css";
import React from 'react'
import Header from "../header/Header";

import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
  return (
    <div className="hero">
    <div className="left-h">
        <Header/>
        <div className="best-ad">
          <div></div>
          <span>The best fitness club in town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
           <div>
           <span className="stroke-text" >Shape </span>
           <span>Your</span></div>
           <div><span>Ideal body</span></div>
           <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis, vero repellat odio libero atque similique !</span>
           </div>
        </div>
        {/* figures */}
        <div className="figures">
        <div>
        <span>+140 </span>
        <span>expert coaches</span>
        </div>
        <div>
        <span>+978</span>
        <span>member joined</span>
        </div>
        <div>
        <span>+50</span>
        <span>fitness programs</span>
        </div>
        </div>
        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">
            Get started
          </button>
          <button className="btn">
            Learn More
          </button>
        </div>
     </div>
     {/* right side */}
    <div className="right-h">
      <button className="btn">Join now</button>
       <div className="heart-rate">
        <img src={Heart} alt="me" />
        <span>Heart Rate</span><span>116 bpm </span>
       </div>
    
     </div>
    </div>
  )
}

export default Hero