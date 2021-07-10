import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTiming: false,
      elapsed: 0,
      intervalID: undefined
    };
  }

  handleFaceClick = () => {
    if (!this.state.isTiming) this.setState({ elapsed: 0 });
  }

  handleIconClick = () => {
    this.setState({ isTiming: !this.state.isTiming });
    if (!this.state.isTiming) {
      let seconds = this.state.elapsed;
      this.setState({
        intervalID: setInterval(() => {
          seconds++;
          this.setState({ elapsed: seconds });
        }, 1000)
      });
    } else {
      this.setState({ intervalID: clearInterval(this.state.intervalID) });
    }
  }

  render() {
    const iconType = this.state.isTiming ? faPauseCircle : faPlayCircle;
    return (
      <div className="stop-watch">
        <div
          className="timer"
          onClick={ this.handleFaceClick }>
          <p>{ this.state.elapsed }</p>
        </div>
        <FontAwesomeIcon
          className="timer-btn"
          icon={iconType}
          onClick={ this.handleIconClick } />
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
