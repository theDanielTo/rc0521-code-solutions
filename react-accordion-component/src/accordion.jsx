import React from 'react';
import Topic from './topic';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicClicked: null
    };
  }

  handleClick = () => {
    this.setState({ topicClicked: this.props.topics.topicId });
  }

  fillAccordion = () => {
    const topics = this.props.topics;
    return topics.map((topic, index) =>
      <Topic
        key={index}
        header={topic.header}
        details={topic.details}
        onTopicClick={this.handleClick} />
    );
  }

  render() {
    console.log(this.state.topicClicked);
    return (
      <div className="container">
        {this.fillAccordion()}
      </div>
    );
  }
}
