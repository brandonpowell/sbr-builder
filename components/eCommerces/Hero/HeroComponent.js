/* eslint-disable @next/next/no-img-element */
// HeroComponent.js
import React from 'react';

const HeroComponent = ({ image, title, description }) => (
  <div className="hero-banner">
    <img src={image} alt="Hero Image" className="hero-image" />
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default HeroComponent;
