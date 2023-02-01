import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux';
import AddData from './AddData';
import ItemData from './ItemData';
import ListData from './ListData';
import './App.css'

const App: React.FC = () => {
  const [selecetItem, setSelecetItem] = useState(null)
  const [addVisibility, setAddVisibility] = useState<boolean>(false)

  return (
    <div className='wrapper'>
      <h1>manager passwords</h1>
      <div onClick={() => setAddVisibility(!addVisibility)}>{
        addVisibility === false ? 'Add new passwords' : 'return back'
      }</div>
      {
        addVisibility === true ? <AddData /> : <div className='area-app'>
          <ListData setSelecetItem={setSelecetItem} />
          {
            selecetItem !== null ? <ItemData selecetItem={selecetItem} /> : <></>
          }
        </div>
      }

    </div>
  )
}

export default App;
