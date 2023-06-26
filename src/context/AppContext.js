import { createContext, useReducer } from "react"
import {v4 as uuidv4} from 'uuid';
const initialState={
    budget:2000,
    expenses:[
        {id:uuidv4(), name:'shopping', cost: 40},
        {id:uuidv4(), name:'Travel', cost: 240},
        {id:uuidv4(), name:'Miscellaneous', cost: 55},
    ]
};
const AppReducer=(state, action)=>{
        switch(action.type){
            case 'ADD_EXPENSE':
                return {
                    ...state,
                    expenses: [...state.expenses, action.payload] // storing prev value ans payload
                };
            case 'DELETE_EXPENSE':
			    return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		    case 'SET_BUDGET':
			    return {
				...state,
				budget: action.payload,
			};
            default:
                return state;
        }
}
export const AppContext=createContext();

export const AppProvider = (props)=>{
    const [state, dispatch]=useReducer(AppReducer, initialState); // same as useState

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,

        }}>
            {props.children}
        </AppContext.Provider>
    )

}