import React from 'react';

function ProgressSquares(props) {
  function handleClick(e) {
    props.onSquareClick(e.target.id);
  }

  function fillSquares() {
    const squares = [];
    for (let i = 0; i < 5; i++) {
      const filledGlass = (i === parseInt(props.slot))
        ? 'fas'
        : '';
      squares.push(
        <i className={'far fa-square ' + filledGlass}
          id={i}
          key={i}
          onClick={handleClick} />
      );
    }
    return squares;
  }

  return (
    <div className="progress-squares">
      {fillSquares()}
    </div>
  );
}

export default ProgressSquares;
