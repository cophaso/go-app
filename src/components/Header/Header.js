import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <Link
          to='/home'>
          Home
        </Link>
      </div>
    )
  };

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/signup'>
          Sign Up
        </Link>
      </div>
    )
  };

  render() {
    return <>
      <nav className='Header'>
        <h1>
          {TokenService.hasAuthToken() 
            ? <Link to='/home'>{' '}Go!</Link>
            : <Link to='/'>{' '}Go!</Link>
          }
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    </>
  };
}
