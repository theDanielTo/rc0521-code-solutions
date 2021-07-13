import React from 'react';

export default function AppLink(props) {
  return (
    <a
      href="#"
      className="link"
      onClick={props.onClick}>
      {props.text}
    </a>
  );
}
