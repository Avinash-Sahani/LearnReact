import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {

    let expenseContent = <p> No Expense Found </p>
    const [selectedYear, setSelectedYear] = useState("2020")
    const filterHandler = (newSelectedYear) => {

        setSelectedYear(newSelectedYear);
    }

    const filteredExpense = props.items.filter(expense => expense.date.getFullYear() == selectedYear);

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} OnChangeFilter={filterHandler}></ExpenseFilter>

            <ExpenseList items = {filteredExpense}></ExpenseList>

        </Card>

    )
}

export default Expenses