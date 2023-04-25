import React from "react";
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css";
const ExpenseList = (props) => {
    if (props.items.length == 0)
        return <h2 className="expenses-list__fallback">No expenses found!</h2>

     return  (props.items.map((expenseData) => (
        <ul className="expenses-list">
            <ExpenseItem
                key={expenseData.id}
                title={expenseData.title}
                date={expenseData.date}
                amount={expenseData.amount}/>
        </ul>
     )));


}
export default ExpenseList;
