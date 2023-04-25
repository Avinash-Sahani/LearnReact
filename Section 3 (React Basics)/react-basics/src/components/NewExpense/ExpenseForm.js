import "../NewExpense/ExpenseForm.css";
import React, {useState} from "react";

const ExpenseForm = (props) => {

    const emptyValue = "";

    const [enteredTitle, setTitle] = useState(emptyValue)
    const [enteredAmount, setAmount] = useState(emptyValue)
    const [enteredDate, setDate] = useState(emptyValue)


    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
        console.log(expenseData);
        setAmount(emptyValue)
        setTitle(emptyValue)
        setDate(emptyValue)
        props.OnSaveExpense(expenseData);

    }

    const cancelButtonEventHandler =() =>{
        props.OnCancel();
    }
    const changeTitleHandler = (event) => {
        setTitle(event.target.value)
        console.log(enteredTitle)
    }
    const changeAmountHandler = (event) => {
        setAmount(event.target.value)
        console.log(enteredAmount)
    }
    const changeDateHanlder = (event) => {
        setDate(event.target.value)
        console.log(enteredDate)
    }
    return (
        <form  onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label >Title</label>
                    <input type='text' onChange={changeTitleHandler} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label >Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={changeAmountHandler} value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label >Date</label>
                    <input type='date' min='2019-01-01' step='2022-12-13' onChange={changeDateHanlder} value={enteredDate}/>
                </div>


            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={cancelButtonEventHandler} >Cancel</button>

            </div>
        </form>
    )
}
export default ExpenseForm;