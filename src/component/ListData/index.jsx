import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import './index.css'

const ListData = ({ setSelecetItem }) => {
  const [selectId, setSelectId] = useState('')
  const data = useSelector(state => state.managerPassword.data)
  const isMounted = useRef(false)
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(data)
      localStorage.setItem('data', json)
    }
    isMounted.current = true
  }, [data])

  const onChangeSelect = (id) => {
    setSelectId(id)
  }

  return (
    <ul className='site-list'>
      {
        data.map((item) => {
          return <li key={item.id}
            onClick={() => { setSelecetItem(item); onChangeSelect(item.id) }}
            className={item.id === selectId ? 'site-item-select' : 'site-item'}>
            {item.site}
          </li>
        })
      }
    </ul>
  )
}
export default ListData;
