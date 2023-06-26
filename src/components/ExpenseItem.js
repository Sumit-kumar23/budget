import React from 'react'
import { TiDelete } from 'react-icons/ti';
const ExpenseItem = (props) => {
  return (
    <li className='d-flex list-group-item justify-content-between align-items-center'>
        {props.name}
        <div>
           <span className='badge bg-primary bg-pill mr-3'>
                ₹{props.cost}
               
           </span>
           <TiDelete size='1.5em' />
          
        </div>
    </li>
  )
}

export default ExpenseItem

