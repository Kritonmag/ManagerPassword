import React from 'react'
import { useSelector } from 'react-redux';


const ListData = () => {
  const data = useSelector(state => state.managerPassword.data)

  console.log(data)

  return (
    <ul>
      {
        data.map((item) => {
          return <li key={item.id}>{item.site}</li>
        })
      }
    </ul>
  )
}
export default ListData;
