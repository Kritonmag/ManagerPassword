import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux';
import AddData from './AddData';
import ItemData from './ItemData';
import ListData from './ListData';

const App: React.FC = () => {
  const [selecetItem, setSelecetItem] = useState(null)

  return (
    <div className='wrapper'>
      <h1>SAVE PASSWORD</h1>
      <AddData />
      <div>
        <ListData setSelecetItem={setSelecetItem} />
        {
          selecetItem !== null ? <ItemData selecetItem={selecetItem} /> : <></>
        }
      </div>
    </div>
  )
}

export default App;
