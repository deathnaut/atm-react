import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super(props);

    this.state = {
      balance: 0,
    }
    this._handleDepositClick = this._handleDepositClick.bind(this);
  };

  _handleDepositClick(e){
    e.preventDefault();
    console.log("deposit click");
    console.log(typeof this.state.balance);
    let amount = parseInt(this.inputBox.value, 10);
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    });
    this.inputBox.value = '';
  };


  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input)=>this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(e)=>this._handleDepositClick(e)}/>
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}
