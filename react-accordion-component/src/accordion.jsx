import React from 'react';
import Topic from './topic';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicClicked: null
    };
  }

  handleClick = id => {
    this.setState({ topicClicked: id });
  }

  fillAccordion = () => {
    const topics = this.props.topics;
    return topics.map(topic => {
      const clicked = (topic.id === parseInt(this.state.topicClicked));
      return (
        <Topic
          key={topic.id}
          header={topic.header}
          details={topic.details}
          id={topic.id}
          clicked={clicked}
          onTopicClick={this.handleClick} />
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
