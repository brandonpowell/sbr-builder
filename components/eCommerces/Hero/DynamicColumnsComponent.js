/* eslint-disable @next/next/no-img-element */
// DynamicColumnsComponent.js

import React from 'react';

const DynamicColumnsComponent = ({ columns }) => (
  <div className="dynamic-columns">
    {columns.map(({ image, text }, index) => (
      <div className="dynamic-column" key={index}>
        <img src={image} alt={`Image ${index + 1}`} className="dynamic-image" />
        <p>{text}</p>
      </div>
    ))}
  </div>
);

export default DynamicColumnsComponent;
