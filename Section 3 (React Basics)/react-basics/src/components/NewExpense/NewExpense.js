import "../NewExpense/NewExpense.css";
import  ExpenseForm from "./ExpenseForm";
import React,{useState}  from "react";
const NewExpense = (props) =>{

    const [IsEditing,setIsEditing] = useState(false)
    const addExpenesHander = (newexpense) =>{

        let expense = {
            ...newexpense,
            id:Math.random().toString()
        }
        props.OnAddExpense(expense)
        console.log(expense)

    }
    const startEditingHandler = () =>{
        setIsEditing(true)
    }
    const stopEditingHandler = () =>{
        setIsEditing(false)
    }

    return (<div class = "new-expense">
        {!IsEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
        {IsEditing &&   <ExpenseForm OnSaveExpense = {addExpenesHander} OnCancel ={stopEditingHandler} /> }

    </div>)
}
export default NewExpense;