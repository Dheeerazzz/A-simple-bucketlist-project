import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import { useState } from 'react';

function ExpenseItem(props){
  
  const [title,setTitle]=useState(props.title);
  function titlechange=()=>{
    setTitle('updated');
  }

    return(
        <div>
    <ExpenseDate></ExpenseDate>
    <h1 className="expense-item">jajjanakari janare</h1>
    <h2>{props.title}</h2>
    <h2>{props.amount}</h2>
    <button onClick={titlechange}>hello</button>
    <p><b>{Math.random()}</b></p>
      </div>
    ); 
}

export default ExpenseItem;