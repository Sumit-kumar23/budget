import React from 'react'
import ExpenseItem from './ExpenseItem';
const ExpenseList = () => {
    const expenses=[{
        id:123,
        name: "Shopping",
        cost: 11000,

    },
    {
        id:124,
        name: "Holiday",
        cost: 12000,
        
    },
    {
        id:125,
        cost: 13000,
        name: "Transport",
       
        
    } ];
  return (

      <ul>
        {
            expenses.map((expense)=>(
                 <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
            ))
        }
      </ul>

  )
}

export default ExpenseList
