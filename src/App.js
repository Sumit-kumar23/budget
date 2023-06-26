import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget'
import Remaning from './components/Remaning'
import ExpenesTotal from './components/ExpenesTotal'
import ExpenseList from './components/ExpenseList'
import AddExpenseForm from './components/AddExpenseForm'

const App  = () => {
  return (
    <div className='container'>
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='row mt-3'>
           <div className='col-sm'>
            <Budget/>
           </div>
           <div className='col-sm'>
            <Remaning/>
           </div>
           <div className='col-sm'>
            <ExpenesTotal/>
           </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList/>
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='mt-3'>
            <div className='col'>
              <AddExpenseForm/>
            </div>

        </div>
    </div>
  )
}

export default App;
