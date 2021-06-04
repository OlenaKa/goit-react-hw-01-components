import React from "react";
import PropTypes from "prop-types";
import Transaction from "./Transaction";
import styles from "./transactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.history}>
    <thead className={styles.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <Transaction
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          key={item.id}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
