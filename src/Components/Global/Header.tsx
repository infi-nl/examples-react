import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Example form</Link>
      </nav>
    </header>
  );
}

export default Header;
