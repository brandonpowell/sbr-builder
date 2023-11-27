/* eslint-disable @next/next/no-img-element */
// DoubleColumnsComponent.js
import React from 'react';

const DoubleColumnsComponent = ({ image1, text1, image2, text2 }) => (
  <div className="double-columns">
    <div className="double-column">
      <img src={image1} alt="Image 1" className="double-image" />
      <p>{text1}</p>
    </div>
    
    <div className="double-column">
      <img src={image2} alt="Image 2" className="double-image" />
      <p>{text2}</p>
    </div>
  </div>
);

export default DoubleColumnsComponent;
