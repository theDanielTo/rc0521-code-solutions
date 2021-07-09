import React from 'react';
import ReactDOM from 'react-dom';

const colorClass = [
  'color-indigo',
  'color-mediumslateblue',
  'color-tomato',
  'color-lightsalmon',
  'color-gold',
  'color-white'
];

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  setClass = () => {
    if (this.state.clicks < 3) return `hot-button ${colorClass[0]}`;
    if (this.state.clicks < 6) return `hot-button ${colorClass[1]}`;
    if (this.state.clicks < 9) return `hot-button ${colorClass[2]}`;
    if (this.state.clicks < 12) return `hot-button ${colorClass[3]}`;
    if (this.state.clicks < 15) return `hot-button ${colorClass[4]}`;
    return `hot-button ${colorClass[5]}`;
  }

  render() {
    return (
      <button
        className={this.setClass()}
        onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
