import React from 'react';
import Title from './title';
import ImageShift from './image-shift';
import ProgressSquares from './progress-squares';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slot: 1
    };
  }

  handleClick = () => {

  }

  render() {
    return (
      <div className="container">
        <Title />
        <ImageShift />
        <ProgressSquares />
      </div>
    );
  }
}

export default Carousel;
