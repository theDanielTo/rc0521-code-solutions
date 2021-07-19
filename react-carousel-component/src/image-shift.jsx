import React from 'react';

function ImageShift(props) {
  function handleClick(e) {
    if (e.target.classList.contains('fa-chevron-circle-left')) {
      props.onArrowClick('left');
    } else {
      props.onArrowClick('right');
    }
  }

  return (
    <div className="carousel">
      <i className="fas fa-chevron-circle-left"
        onClick={handleClick} />
      <img src={props.src}
        alt={props.alt} />
      <i className="fas fa-chevron-circle-right"
        onClick={handleClick} />
    </div>
  );
}

export default ImageShift;
