import React from "react";
import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className={styles["expenses-list__fallback"]}>No Expenses Found.</h2>;
  }
  return (
    <ul className={styles["expenses-list"]}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
