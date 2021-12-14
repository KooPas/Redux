//lesson3

import React from "react";
import  './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {addCustomerAction, removeCustomerAction} from './store/customerReducer'


function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    
    const customers = useSelector(state => state.customers.customers)

   

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", cash: cash})
    }

    const getCash = (cash) => {
        dispatch({type:"GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }
    
    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }



    console.log(customers.length)
    return (
        <div className={'app'}>
            <div style={{fontSize:"3rem"}}>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}> пополнить счет </button>
                <button onClick={() =>getCash(Number(prompt()))}> снять со счета </button>
                <button onClick={() => addCustomer(prompt())}> добавить клиента </button>
                <button onClick={() => removeCustomer(prompt())}> удалить </button>
            </div>
            {customers.length > 0 ? 
                <div>
                    {customers.map(customer => 
                        <div onClick={() => removeCustomer(customer)} style={{fontSize: "2ren", border: '1px solid black', padding: '10px', marginTop: 5}}> 
                            {customer.name}
                        </div> 
                )}
                </div>
                :
                <div style = {{fontSize: '3rem', marginTop: 2}}>
                    никого нет 
                </div>
            }
        </div>
    )
}

export default App;