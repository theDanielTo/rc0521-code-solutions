import React from 'react';

function Topic(props) {
  return (
    <div className="topic">
      <div
        className="topic-header"
        id={props.id}
        onClick={props.onClick}>
        <h2>{props.header}</h2>
      </div>
      <div className={props.className}>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default Topic;
