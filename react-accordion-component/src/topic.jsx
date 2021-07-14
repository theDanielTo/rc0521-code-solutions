import React from 'react';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = e => {
    if (e.target.tagName === 'H2') {
      this.props.onTopicClick(e.target.closest('.topic-header').id);
    } else {
      this.props.onTopicClick(e.target.id);
    }

    this.setState({
      clicked: !this.state.clicked
    });
  }

  setTopicState = () => {
    if (this.props.clicked) this.setState({ clicked: true });
    else this.setState({ clicked: false });
  }

  render() {
    const visible = this.state.clicked ? '' : 'hidden';
    this.setTopicState();
    return (
      <div className="topic">
        <div
          className="topic-header"
          id={this.props.id}
          onClick={this.handleClick}>
          <h2>{this.props.header}</h2>
        </div>
        <div className={'topic-details ' + visible}>
          <p>{this.props.details}</p>
        </div>
      </div>
    );
  }
}
