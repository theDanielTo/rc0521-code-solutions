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

  render() {
    let index = 0;

    if (this.state.clicks < 3) index = 0;
    else if (this.state.clicks < 6) index = 1;
    else if (this.state.clicks < 9) index = 2;
    else if (this.state.clicks < 12) index = 3;
    else if (this.state.clicks < 15) index = 4;
    else index = 5;

    const color = colorClass[index];
    const classes = `hot-button ${color}`;

    return (
      <button
        className={classes}
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
