import React from "react";

const Transaction = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Amount"
        onChange={props.onChange}
      ></input>
      <button onClick={props.deposit}>Deposit</button>
      <button onClick={props.withdraw}>withdraw</button>
      <p>₹{props.amount}</p>
    </div>
  );
};
export default Transaction;
