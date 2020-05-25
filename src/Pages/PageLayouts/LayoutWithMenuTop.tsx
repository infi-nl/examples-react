import React from 'react';
import Header from '../../Components/Global/Header';

export const LayoutWithMenuTop = ({...props}) => {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        {props.children}
      </div>
    </div>
  );
}