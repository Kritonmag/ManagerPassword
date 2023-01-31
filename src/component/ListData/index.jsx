import React from 'react'
import { useSelector } from 'react-redux';


const ListData = ({ setSelecetItem }) => {
  const data = useSelector(state => state.managerPassword.data)

  console.log(data, 'data')

  return (
    <ul>
      {
        data.map((item) => {
          return <li key={item.id} onClick={() => setSelecetItem(item)}>{item.site}</li>
        })
      }
    </ul>
  )
}
export default ListData;
