import "./testimonial.css";
import React,{useState} from "react";
import { testimonialsData } from './../../data/testimonialsData';

const Testimonials = () => {
    const [selected,setSelected] = useState(0);
    const tlength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span style={{color:'var(--orange)'}}> 
                { testimonialsData[selected].name}
            </span>{" "}
           
            {testimonialsData[selected].status}
            
        </span>
      </div>
      <div className="right-t"></div>
    </div>
  );
};

export default Testimonials;
