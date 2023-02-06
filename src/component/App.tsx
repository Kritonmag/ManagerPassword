import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, removeItem } from '../redux/slices/managerSlice';
import { IAddItem } from '../@type/assets'
import AddData from './AddData';
import ItemData from './ItemData';
import ListData from './ListData';
import './App.css'

const App: React.FC = () => {
  const dispach = useDispatch()
  const [selecetItem, setSelecetItem] = useState<IAddItem>({
    site: '',
    login: '',
    password: '',
    id: ''
  })
  const [addVisibility, setAddVisibility] = useState<boolean>(false)

  const onRemove = (item: string) => {
    let result: any = prompt('write the name of the site')
    if (result.toLowerCase() == item.toLowerCase()) {
      dispach(removeItem(selecetItem))
    } else {
      alert('error')
    }
    setSelecetItem({
      site: '',
      login: '',
      password: '',
      id: ''
    })
  }

  const onChangePassword = (newPassword: string) => {
    if (newPassword == '') {
      alert('error')
    } else {
      let newItem = {
        ...selecetItem, password: newPassword
      }

      setSelecetItem(newItem)
      dispach(editItem(newItem))
    }
  }

  return (
    <div className='wrapper'>
      <h1 className='mainTitle'>passwords manager</h1>
      <div onClick={() => setAddVisibility(!addVisibility)} className='Add-new-pass-btn'>
        {
          addVisibility === false ? 'Add new passwords' : 'return back'
        }
      </div>
      <div className='list-and-inform'>
        <ListData setSelecetItem={addVisibility === false ? setSelecetItem : ''} />
        {
          addVisibility === false ?
            selecetItem.site !== '' ?
              <ItemData selecetItem={selecetItem}
                onRemove={onRemove}
                onChangePassword={onChangePassword} /> :
              <></> :
            <AddData setAddVisibility={setAddVisibility} />
        }
      </div>
    </div>
  )
}

export default App;
