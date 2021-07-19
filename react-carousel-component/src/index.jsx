import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const imgs = [
  // { alt: 'Bulbasaur', src: '../dist/images/001.png' },
  // { alt: 'Charmander', src: '../dist/images/004.png' },
  // { alt: 'Squirtle', src: '../dist/images/007.png' },
  // { alt: 'Pikachu', src: '../dist/images/025.png' },
  // { alt: 'Jigglypuff', src: '../dist/images/039.png' }
  { alt: 'Nic Cage', src: '../dist/images/nic-cage-1.jpg' },
  { alt: 'Nic Cage', src: '../dist/images/nic-cage-2.jpg' },
  { alt: 'Nic Cage', src: '../dist/images/nic-cage-3.jpg' },
  { alt: 'Nic Cage', src: '../dist/images/nic-cage-4.jpg' },
  { alt: 'Nic Cage', src: '../dist/images/nic-cage-5.jpeg' }
];

ReactDOM.render(
  <Carousel imgs={imgs}/>,
  document.querySelector('#root')
);
