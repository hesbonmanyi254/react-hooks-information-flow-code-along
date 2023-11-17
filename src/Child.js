// Child.js
import React from 'react';
import { getRandomColor } from './randomColorGenerator';  // Import the getRandomColor function

function Child({ onChangeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />
  );
}

export default Child;
