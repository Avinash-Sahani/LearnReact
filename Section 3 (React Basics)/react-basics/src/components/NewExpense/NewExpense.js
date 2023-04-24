import "../NewExpense/NewExpense.css";
import  ExpenseForm from "./ExpenseForm";
import React  from "react";
const NewExpense = () =>{

    const addExpenesHander = (newexpense) =>{

        let expense = {
            ...newexpense,
            id:Math.random().toString()
        }

        console.log(expense)

    }
    return (<div class = "new-expense">
        <ExpenseForm OnSaveExpense = {addExpenesHander} />
    </div>)
}
export default NewExpense;