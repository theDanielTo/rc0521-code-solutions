import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const MIN_PASS_LEN = 8;

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      errorMsg: 'A password is required.',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.password.length === 0) {
      this.setState({ errorMsg: '' });
    } else if (this.state.password.length >= MIN_PASS_LEN) {
      this.validatePw(this.state.password);
    } else {
      this.setState({ errorMsg: 'Your password is too short' });
    }
  }

  validatePw = password => {
    if (!/[0-9+]/.test(password)) {
      this.setState({
        errorMsg: 'Must contain 1 digit.'
      });
      return;
    }
    if (!/[A-Z+]/.test(password)) {
      this.setState({
        errorMsg: 'Must contain a capital letter.'
      });
      return;
    }
    if (!/[!@#$%^&*()]/.test(password)) {
      this.setState({
        errorMsg: 'Must contain a special character.'
      });
      return;
    }
    this.setState({
      isValid: true,
      errorMsg: ''
    });
  }

  render() {
    const iconName = this.state.isValid ? faCheck : faTimes;
    const iconColor = this.state.isValid ? 'color-green' : 'color-red';
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">
          <h4>Password</h4>
        </label>
        <input
          type="password"
          id="password-input"
          name="password"
          onChange={this.handleChange} />
        <FontAwesomeIcon
          className={iconColor + ' valid-icon'}
          icon={iconName} />
        <p
          className="color-red">
          {this.state.errorMsg}
        </p>
      </form>
    );
  }
}

ReactDOM.render(
  <PasswordInput />,
  document.querySelector('#root')
);
