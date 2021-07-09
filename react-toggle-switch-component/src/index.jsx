import React from 'react';
import ReactDOM from 'react-dom';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: true
    };
  }

  handleClick = () => {
    this.setState({
      switched: !this.state.switched
    });
  }

  setWellClass = () => {
    return this.state.switched ? 'switch-well bg-green' : 'switch-well bg-grey';
  }

  setSwitchClass = () => {
    return this.state.switched ? 'switch pos-right' : 'switch pos-left';
  }

  setToggleText = () => {
    return this.state.switched ? 'ON' : 'OFF';
  }

  render() {
    return (
      <div className="toggler">
        <div
          className={ this.setWellClass() }
          onClick={ this.handleClick }>
          <div
            className={ this.setSwitchClass() }>
          </div>
        </div>
        <ToggleText text={ this.setToggleText() } />
      </div>
    );
  }
}

const ToggleText = props => {
  return (
    <h2>{props.text}</h2>
  );
};

ReactDOM.render(
  <ToggleButton />,
  document.querySelector('#root')
);
