import React from 'react';

function ImageShift(props) {
  function handleClick(e) {
    if (e.target.className === 'fa-chevron-circle-left') {
      props.onArrowClick('left');
    } else {
      props.onArrowClick('right');
    }
  }

  return (
    <div className="carousel">
      <i className="fas fa-chevron-circle-left"
        onClick={handleClick} />
      <img src="../dist/images/001.png"
        alt="Bulbasaur" />
      <i className="fas fa-chevron-circle-right"
        onClick={handleClick} />
    </div>
  );
}

export default ImageShift;
