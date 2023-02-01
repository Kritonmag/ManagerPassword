import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IAddItem } from '../../@type/assets'
import { editItem, removeItem } from '../../redux/slices/managerSlice'
import './index.css'

type IItemProps = {
  selecetItem: IAddItem;
}

const ItemData: React.FC<IItemProps> = ({ selecetItem }) => {
  const [editVisibility, setEditVisibility] = useState(false)
  const [loginValue, setLoginValue] = useState<string>(selecetItem.login)
  const [passwordValue, setPasswordValue] = useState<string>(selecetItem.password)
  const [item, setItem] = useState<IAddItem>({
    site: selecetItem.site,
    login: selecetItem.login,
    password: passwordValue,
    id: selecetItem.id
  })
  const dispach = useDispatch();

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue(event.target.value)
    setItem({
      site: item.site,
      login: loginValue,
      password: item.password,
      id: item.site
    })
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value
    setPasswordValue(newPassword)
    setItem({
      site: item.site,
      login: item.login,
      password: newPassword,
      id: item.site
    })
  }

  return (
    <div>
      <div className='area-inform'>
        <div className='area-login'>
          <div className='title'>Login</div>
          <div>{selecetItem.login}</div>
        </div>
        <div className='area-password'>
          <div className='title'>Password</div>
          {
            editVisibility === false ? <div>{selecetItem.password}</div> : <input value={passwordValue} onChange={onChangePassword} />
          }
        </div>
      </div>
      <ul className='area-btn'>
        {
          editVisibility === false ?
            <li className='btn-item btn-edit' onClick={() => { setEditVisibility(!editVisibility) }}>EDIT</li> :
            <li className='btn-item btn-save' onClick={() => dispach(editItem(item))}>SAVE</li>
        }
        {
          editVisibility === false ?
            <li className='btn-item btn-remove' onClick={() => dispach(removeItem(selecetItem))}>REMOVE</li> :
            <li className='btn-item btn-back' onClick={() => { setEditVisibility(false) }}>BACK</li>
        }



      </ul>
    </div>

  )
}
export default ItemData
