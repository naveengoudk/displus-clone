import React from "react";
import Slider from "react-slick";
import './imgslider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const obj = useSelector((state)=>state.movies)
  console.log(obj);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  }
  return (
    <Slider className="sliderdiv" {...settings}>
    
        {obj.map((item)=>{
          return <div><Link to={`/details/${item.id}`}><img className="img" src={item.image} ></img></Link> </div>
        })}
      
    </Slider>
  );
}