import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux';
import AddData from './AddData';
import ListData from './ListData';

const App: React.FC = () => {

  return (
    <div className='wrapper'>
      <h1>SAVE PASSWORD</h1>
      <AddData />
      <ListData />
    </div>
  )
}

export default App;
