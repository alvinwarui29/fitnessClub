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
        
     </div>
    <div className="right-h">right side  </div>
    </div>
  )
}

export default Hero