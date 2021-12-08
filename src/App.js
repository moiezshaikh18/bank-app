import React from "react";
import Transaction from "./components/Transaction";

class BankApp extends React.Component {
  state = {
    value: 0,
    accounts: [
      {
        acc_no: 1,
        acc_name: "moiz",
        balance: 1000,
      },
      {
        acc_no: 2,
        acc_name: "Girish",
        balance: 1000,
      },
      {
        acc_no: 3,
        acc_name: "Gaurish",
        balance: 1000,
      },
    ],
  };

  handelOnChange = (e) => {
    let newText = +e.target.value;
    this.setState({ value: newText });
    console.log(newText);
  };
  onClickDeposit = () => {
    let accCopy = this.state.accounts;
    let index = accCopy.findIndex((ind) => {
      accCopy.acc_no === 1;
    });
    console.log(ind);
  };

  onClickWithdraw = () => {};
  render() {
    return (
      <div>
        <Transaction
          onChange={this.handelOnChange}
          deposit={this.onClickDeposit}
          withdraw={this.onClickWithdraw}
          amount={this.state.value}
        ></Transaction>
      </div>
    );
  }
}
export default BankApp;
