import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return (
    <button>Click Me!</button>
  );
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
