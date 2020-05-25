import React from 'react';
import logo from '../logo.svg';
import { Redirect } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Oops, this page does not exist.
        <Redirect from="/blabla" to="/" exact/>
      </p>
    </div>
  );
}

export default NotFoundPage;
