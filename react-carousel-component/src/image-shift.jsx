import React from 'react';

function ImageShift() {
  return (
    <div className="carousel">
      <i
        className="fas fa-chevron-circle-left"
        />
      <img
        src="../dist/images/001.png"
        alt="Bulbasaur"
        />
      <i
        className="fas fa-chevron-circle-right"
        />
    </div>
  );
}

export default ImageShift;
