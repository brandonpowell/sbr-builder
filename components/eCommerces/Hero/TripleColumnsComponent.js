/* eslint-disable @next/next/no-img-element */
// TripleColumnsComponent.js
import React from 'react';

const TripleColumnsComponent = ({ image1, text1, image2, text2, image3, text3 }) => (
  <div className="triple-columns">
    <div className="triple-column">
      <img src={image1} alt="Image 1" className="triple-image" />
      <p>{text1}</p>
    </div>
    <div className="triple-column">
      <img src={image2} alt="Image 2" className="triple-image" />
      <p>{text2}</p>
    </div>
    <div className="triple-column">
      <img src={image3} alt="Image 3" className="triple-image" />
      <p>{text3}</p>
    </div>
  </div>
);

export default TripleColumnsComponent;
