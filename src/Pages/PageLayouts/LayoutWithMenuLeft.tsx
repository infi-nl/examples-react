import React from 'react';
import Header from '../../Components/Global/Header';

export const LayoutWithMenuLeft = ({...props}) => {
  return (
    <div className="App menu-left">
      <Header/>
      <div className="App-body">
        {props.children}
      </div>
    </div>
  );
}