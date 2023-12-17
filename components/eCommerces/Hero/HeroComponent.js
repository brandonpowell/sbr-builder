/* eslint-disable @next/next/no-img-element */
// HeroComponent.js
import React, {Component} from 'react';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <>
        <Slider {...settings}>
            {this.props.Hero.map((image, index) => (
                <div key={index} className="hero-banner">
                  <img src={image.file} alt="Hero Image" className="hero-image" />
                </div>
            ))}
        </Slider>
      </>
    );
  }
}