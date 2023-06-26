import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const ExpenesTotal = () => {
  const {expenses}=useContext(AppContext);
  const total=expenses.reduce((total, item)=>{
    return (total=total+item.cost);
  },0)
  return (
    <div className='alert alert-primary'>
      <span>Spent So Far: ₹{total}</span>
    </div>
  )
}

export default ExpenesTotal
