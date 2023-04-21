  import "./ExpenseItem.css";
import  ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
  import React, {useState} from "react";
function ExpenseItem(props) {


    const [title,setTitle] = useState(props.title)
    const clickHanlder = ()=>{
        setTitle("Updated")
    }
    return (<Card className="expense-item">
         <div className="expense-item__description">
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHanlder}> Click Me</button>
    </Card>)
}

export default ExpenseItem;