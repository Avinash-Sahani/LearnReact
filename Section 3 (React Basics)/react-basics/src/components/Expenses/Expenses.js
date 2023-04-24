import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React ,{useState} from "react";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {

    const [selectedYear , setSelectedYear] = useState("2020")
    const filterHandler = (newSelectedYear) =>{

         setSelectedYear(newSelectedYear);
    }

    const expenses = props.items;
    return (
                <Card className="expenses">
                    <ExpenseFilter selected= {selectedYear} OnChangeFilter = {filterHandler}></ExpenseFilter>
                    <ExpenseItem
                        title={expenses[0].title}
                        date={expenses[0].date}
                        amount={expenses[0].amount}
                    ></ExpenseItem>
                    < ExpenseItem
                        title={expenses[1].title}
                        date={expenses[1].date}
                        amount={expenses[1].amount}

                    ></ExpenseItem>

                    < ExpenseItem
                        title={expenses[2].title}
                        date={expenses[2].date}
                        amount={expenses[2].amount}

                    ></ExpenseItem>
                    < ExpenseItem
                        title={expenses[3].title}
                        date={expenses[3].date}
                        amount={expenses[3].amount}

                    ></ExpenseItem>
                </Card>

    )
}

export default Expenses