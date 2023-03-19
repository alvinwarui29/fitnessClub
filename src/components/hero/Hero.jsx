import "./Hero.css";
import React from 'react'
import Header from "../header/Header";

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
    <div className="right-h">right side  </div>
    </div>
  )
}

export default Hero