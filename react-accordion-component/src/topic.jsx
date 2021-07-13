import React from 'react';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = e => {
    this.props.onTopicClick(this.props.topicId);
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const visible = this.state.clicked ? '' : 'hidden';
    return (
      <div className="topic">
        <div
          className="topic-header"
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
