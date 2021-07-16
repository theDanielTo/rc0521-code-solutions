import React from 'react';
import Title from './title';
import ImageShift from './image-shift';
import ProgressSquares from './progress-squares';

const interval = 1500;
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: undefined,
      slot: 0
    };
  }

  handleArrowClick = direction => {
    if (direction === 'left') {
      if (this.state.slot === 0) {
        this.setState({ slot: 4 });
      } else {
        this.setState({ slot: this.state.slot - 1 });
      }
    } else {
      if (this.state.slot === 4) {
        this.setState({ slot: 0 });
      } else {
        this.setState({ slot: this.state.slot + 1 });
      }
    }
  }

  handleSquareClick = key => {
    this.setState({ slot: parseFloat(key) });
  }

  componentDidMount = () => {
    this.setState({
      intervalId: setInterval(() => {
        if (this.state.slot === 4) {
          this.setState({ slot: 0 });
        } else {
          this.setState({ slot: this.state.slot + 1 });
        }
      }, interval)
    });
  }

  render() {
    return (
      <div className="container">
        <Title text="Carousel" />
        <ImageShift
          onArrowClick={this.handleArrowClick}
          src={this.props.imgs[this.state.slot].src}
          alt={this.props.imgs[this.state.slot].alt} />
        <ProgressSquares
          onSquareClick={this.handleSquareClick}
          slot={this.state.slot} />
      </div>
    );
  }
}

export default Carousel;
