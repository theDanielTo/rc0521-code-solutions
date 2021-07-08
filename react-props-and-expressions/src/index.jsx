import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = props => {
  return (
    <button>{props.text}</button>
  );
};

const btns = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

ReactDOM.render(
  btns,
  document.querySelector('#root')
);
