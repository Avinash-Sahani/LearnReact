  import "./ExpenseItem.css";
import  ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
  import React, {useState} from "react";
function ExpenseItem(props) {



    return (<Card className="expense-item">
         <div className="expense-item__description">
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
     </Card>)
}

export default ExpenseItem;