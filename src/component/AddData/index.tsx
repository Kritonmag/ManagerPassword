import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IAddItem } from '../../@type/assets'
import { addItem } from '../../redux/slices/managerSlice'
import './index.css'

type IAddProps = {
  setAddVisibility: (item: boolean) => void
}

const AddData: React.FC<IAddProps> = ({ setAddVisibility }) => {
  const [siteValue, setSiteValue] = useState<string>('')
  const [loginValue, setLoginValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [item, setItem] = useState<IAddItem>({
    site: '',
    login: '',
    password: '',
    id: ''
  })
  const dispatch = useDispatch()

  const addNewData = () => {
    setItem({
      site: siteValue,
      login: loginValue,
      password: passwordValue,
      id: siteValue
    })
    if (siteValue.trim().length !== 0 && loginValue.trim().length !== 0 && passwordValue.trim().length !== 0) {
      dispatch(addItem(item))
      setSiteValue('')
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

  const onChangeSite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteValue(event.target.value)
    setItem({ ...item, site: event.target.value, id: event.target.value })
  }

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue(event.target.value)
    setItem({ ...item, login: event.target.value })
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
    setItem({ ...item, password: event.target.value })
  }

  const onAddItem = () => {
    addNewData()
    setAddVisibility(false)
  }

  return (
    <>
      <ul className='add-list'>
        <li className='item-add-list'>
          <div className='title-add-list'>site</div>
          <div><input className='input-add-list' value={siteValue} onChange={onChangeSite} /></div>
        </li>
        <li className='item-add-list'>
          <div className='title-add-list'>login</div>
          <div><input className='input-add-list' value={loginValue} onChange={onChangeLogin} /></div>
        </li>
        <li className='item-add-list'>
          <div className='title-add-list'>password</div>
          <div><input className='input-add-list' value={passwordValue} onChange={onChangePassword} /></div>
        </li>
        <button className='btn-add-list btn-save' onClick={() => onAddItem()}>ADD ITEM</button>
      </ul>
    </>
  )
}

export default AddData
