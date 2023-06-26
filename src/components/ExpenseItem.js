import {React, useContext} from 'react'
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

  return (
    <li className='d-flex list-group-item justify-content-between align-items-center'>
        {props.name}
        <div>
           <span className='badge bg-primary bg-pill mr-3'>
                ₹{props.cost}
               
           </span>
           <TiDelete size='1.5em' onClick={handleDeleteExpense} />
          
        </div>
    </li>
  )
}

export default ExpenseItem

