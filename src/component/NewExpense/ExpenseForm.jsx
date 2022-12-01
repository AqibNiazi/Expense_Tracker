import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [titleEntered, settitleEntered] = useState("");
  const [amountEntered, setamountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    settitleEntered(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    setamountEntered(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };
  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    //       });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleEntered,
      amount: +amountEntered,
      date: new Date(dateEntered),
    };
    props.onSaveExpenseData(expenseData);
    settitleEntered("");
    setamountEntered("");
    setDateEntered("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={titleEntered}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amountEntered}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2021-01-01"
              max="2025-12-31"
              value={dateEntered}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
