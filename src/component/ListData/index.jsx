import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './index.css'

const ListData = ({ setSelecetItem }) => {
  const data = useSelector(state => state.managerPassword.data)

  return (
    <ul className='site-list'>
      {
        data.map((item) => {
          return <li key={item.id}
            onClick={() => { setSelecetItem(item) }}
            className='site-item'>
            {item.site}
          </li>
        })
      }
    </ul>
  )
}
export default ListData;
