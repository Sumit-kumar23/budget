import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaning = () => {
  const {budget, expenses}=useContext(AppContext);
  const total=expenses.reduce((total,item)=>{
    return (total=total+item.cost)
  },0)
  return (
    <div className='alert alert-success'>
        <span>Remaning: {budget-total}</span>
      
    </div>
  )
}

export default Remaning
