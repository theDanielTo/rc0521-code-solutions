import React from 'react';
import Title from './title';
import ImageShift from './image-shift';
import ProgressSquares from './progress-squares';

const interval = 2000;

const intervalId = setInterval(nextImg, interval);

function nextImg() {

}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slot: 1
    };
  }

  handleArrowClick = () => {
    clearInterval(intervalId);
    setTimeout(() => {
      setInterval(nextImg, interval);
    });
  }

  handleSquareClick = () => {
    clearInterval(intervalId);
    setTimeout(() => {
      setInterval(nextImg, interval);
    });
  }

  render() {
    return (
      <div className="container">
        <Title text="Carousel"/>
        <ImageShift onArrowClick={this.handleArrowClick}/>
        <ProgressSquares onSquareClick={this.handleSquareClick}/>
      </div>
    );
  }
}

export default Carousel;
