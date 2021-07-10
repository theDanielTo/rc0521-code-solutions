import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: ''
    };
  }

  handleChange = e => {
    this.setState({ emailInput: e.target.value });
  }

  handleSubmit = e => {
    console.log('this.state:', this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email">
          <span>Email</span>
        </label>
        <input
          type="text"
          value={this.state.emailInput }
          onChange={ this.handleChange } />
        <button type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
