import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IAddItem } from '../../@type/assets'
import { editItem, removeItem } from '../../redux/slices/managerSlice'

type IItemProps = {
  selecetItem: IAddItem;
}

const ItemData: React.FC<IItemProps> = ({ selecetItem }) => {
  const [editVisibility, setEditVisibility] = useState(false)
  const [loginValue, setLoginValue] = useState<string>(selecetItem.login)
  const [passwordValue, setPasswordValue] = useState<string>(selecetItem.password)
  const [item, setItem] = useState<IAddItem>({
    site: selecetItem.site,
    login: loginValue,
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
    setPasswordValue(event.target.value)
    setItem({
      site: item.site,
      login: item.login,
      password: passwordValue,
      id: item.site
    })
  }

  const onSaveItem = () => {
    if (loginValue.trim().length !== 0 && passwordValue.trim().length !== 0) {
      dispach(editItem(item))
      setLoginValue('')
      setPasswordValue('')
      setItem({
        site: '',
        login: '',
        password: '',
        id: '0'
      })
    } else {
      alert('ERROR')
    }

  }

  console.log(item)

  return (
    <div>
      <div className='area-login'>
        <div>Login</div>
        {
          editVisibility === false ? <div>{selecetItem.login}</div> : <input value={loginValue} onChange={onChangeLogin} />
        }
      </div>
      <div className='area-password'>
        <div>Password</div>
        {
          editVisibility === false ? <div>{selecetItem.password}</div> : <input value={passwordValue} onChange={onChangePassword} />
        }
      </div>
      <div className='area-btn'>
        <div onClick={() => { setEditVisibility(!editVisibility) }}>EDIT</div>
        <div onClick={() => onSaveItem()}>SAVE</div>
        <div onClick={() => dispach(removeItem(selecetItem))}>REMOVE</div>
      </div>
    </div>
  )
}

export default ItemData
