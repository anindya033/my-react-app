import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
        ...enteredExpenseData,
        id : Math.random().toString()
    };
    console.log("Data coming form child expenseData");
    console.log(expenseData);

    //passing data : Child to Parent ; to app.js
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
