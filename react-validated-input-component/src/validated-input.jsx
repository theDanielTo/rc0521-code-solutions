import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const MIN_PASS_LEN = 8;

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      isValid: false,
      errorMsg: '',
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
    this.setState({ submitted: true });
    if (this.state.password.length === 0) {
      this.setState({ errorMsg: 'A password is required.' });
    } else if (this.state.password.length >= MIN_PASS_LEN) {
      this.validatePw(this.state.password);
    } else {
      this.setState({ errorMsg: 'Your password is too short' });
    }
  }

  validatePw = password => {
    if (!/[0-9+]/.test(password)) {
      this.setState({
        errorMsg: 'Must contain a digit.'
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
    const iconVisible = this.state.submitted ? '' : 'hidden ';
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
          className={iconVisible + iconColor + ' valid-icon'}
          icon={iconName} />
        <p
          className="color-red">
          {this.state.errorMsg}
        </p>
      </form>
    );
  }
}
