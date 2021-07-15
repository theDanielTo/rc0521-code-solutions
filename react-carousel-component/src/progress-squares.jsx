import React from 'react';

function ProgressSquares() {
  function handleClick(e) {
    e.target.classList.remove = 'fas';
  }

  return (
    <div className="progress-squares">
      <i className="far fa-square fas"
        onClick={handleClick} />
      <i className="far fa-square"
        onClick={handleClick} />
      <i className="far fa-square"
        onClick={handleClick} />
      <i className="far fa-square"
        onClick={handleClick} />
      <i className="far fa-square"
        onClick={handleClick} />
    </div>
  );
}

export default ProgressSquares;
