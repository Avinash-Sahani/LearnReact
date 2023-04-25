import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState("2020")
    const filterHandler = (newSelectedYear) => {

        setSelectedYear(newSelectedYear);
    }

    const expenses = props.items;
    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} OnChangeFilter={filterHandler}></ExpenseFilter>
            {props.items.map((expenseData) =>(

                <ExpenseItem
                    key = {expenseData.id}
                    title={expenseData.title}
                    date={expenseData.date}
                    amount={expenseData.amount}/>))
            }

        </Card>

    )
}

export default Expenses