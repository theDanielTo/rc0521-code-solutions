import React from 'react';
import ReactDOM from 'react-dom';

const h1Elem = React.createElement(
  'h1',
  null,
  ['Hello, React!']
);

ReactDOM.render(
  h1Elem,
  document.querySelector('#root')
);
