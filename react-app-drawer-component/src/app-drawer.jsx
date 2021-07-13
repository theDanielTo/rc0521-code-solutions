import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';
import AppLink from './app-link';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const menuVisible = this.state.isOpen ? 'show-drawer' : 'hide-drawer';
    const dimVisible = this.state.isOpen ? '' : 'hidden';
    return (
      <nav>
        <FontAwesomeIcon
          className='icon'
          icon={faSmileWink}
          onClick={this.handleClick} />
        <div className={menuVisible + ' drawer'}>
          <h1>Menu</h1>
          <AppLink text="About" onClick={this.handleClick} />
          <AppLink text="Get Started" onClick={this.handleClick} />
          <AppLink text="Sign In" onClick={this.handleClick} />
        </div>
        <div
          className={dimVisible + ' page-dim'}
          onClick={this.handleClick} />
      </nav>
    );
  }
}
