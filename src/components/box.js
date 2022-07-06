/** @format */

import React from 'react';
import './box.css';

export const Box = ({ desc, time }) => {
  return (
    <div>
      <div className='box'>{time}</div>
      <p>{desc}</p>
    </div>
  );
};
