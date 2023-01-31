import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IAddItem } from '../../@type/assets'
import { addItem } from '../../redux/slices/managerSlice'

const AddData: React.FC = () => {
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
    setItem({
      site: siteValue,
      login: item.login,
      password: item.password,
      id: item.site
    })
  }

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

  return (
    <>
      <h3>ADD DATA</h3>
      <ul>
        <li>
          <div>site</div>
          <div><input value={siteValue} onChange={onChangeSite} /></div>
        </li>
        <li>
          <div>login</div>
          <div><input value={loginValue} onChange={onChangeLogin} /></div>
        </li>
        <li>
          <div>password</div>
          <div><input value={passwordValue} onChange={onChangePassword} /></div>
        </li>
        <button onClick={() => { addNewData() }}>ADD ITEM</button>
      </ul>
    </>
  )
}

export default AddData
