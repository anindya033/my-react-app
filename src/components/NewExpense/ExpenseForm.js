import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  //Working with multiple state
  /*
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  */

  // working with single state

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    setEnteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value); // working with multiple state

    // working with single state
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);

     // working with single state
     setUserInput({
      ...userInput,
      enteredAmount :event.target.value
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    
    // working with single state
     setUserInput({
      ...userInput,
      enteredDate :event.target.value
    })
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
