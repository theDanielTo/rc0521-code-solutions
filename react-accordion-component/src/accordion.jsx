import React from 'react';
import Topic from './topic';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicClicked: null
    };
  }

  handleClick = e => {
    if (e.target.tagName === 'H2') {
      const clickedId = e.target.closest('.topic-header').id;
      this.setState({ topicClicked: clickedId });
      if (clickedId === this.state.topicClicked) {
        this.setState({ topicClicked: null });
      }
    } else {
      this.setState({ topicClicked: e.target.id });
    }
  }

  fillAccordion = () => {
    const topics = this.props.topics;
    return topics.map(topic => {
      const visible = (topic.id === parseInt(this.state.topicClicked))
        ? ''
        : 'hidden';
      return (
        <Topic
          className={'topic-details ' + visible}
          key={topic.id}
          header={topic.header}
          details={topic.details}
          id={topic.id}
          onClick={this.handleClick} />
      );
    });
  }

  render() {
    return (
      <div className="container">
        {this.fillAccordion()}
      </div>
    );
  }
}
