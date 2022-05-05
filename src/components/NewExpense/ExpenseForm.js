import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Working with multiple state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // working with single state

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   setEnteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // working with multiple state

    // working with single state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // update state depends on prev state; more safer option
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // working with single state
    //  setUserInput({
    //   ...userInput,
    //   enteredAmount :event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //  //

    // working with single state
    //  setUserInput({
    //   ...userInput,
    //   enteredDate :event.target.value
    // })
  };

  const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
          title : enteredTitle,
          amount : enteredAmount,
          date : new Date(enteredDate)
      }
      console.log(expenseData);
      //passing data : Child to Parent ; to NewExpense.js
      props.onSaveExpenseData(expenseData);


      //Clearing the state value for two way binding
      setEnteredAmount('');
      setEnteredTitle('');
      setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
