import "../NewExpense/ExpenseForm.css";
import React  from "react";
const ExpenseForm = () => {

    return (
        <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Text</label>
                <input type='text'/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' step='2022-12-13'/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
</form>
)
}
export default ExpenseForm;