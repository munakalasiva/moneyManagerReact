import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeId: event.target.value})
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updateTransaction = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionList: updateTransaction})
  }

  onAddTransactions = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeId} = this.state
    const typeOf = transactionTypeOptions.find(
      eachOne => eachOne.optionId === typeId,
    )
    const {displayText} = typeOf
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balance = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balance = incomeAmount - expensesAmount

    return balance
  }

  render() {
    const income = this.getIncome()
    const expenses = this.getExpenses()
    const balance = this.getBalance()

    const {transactionList, titleInput, amountInput, typeId} = this.state
    return (
      <div className="container">
        <div className="top-card">
          <h1>Hi,Richard</h1>
          <p>
            welcome back to your <span>Money manager</span>
          </p>
        </div>

        <div>
          <MoneyDetails income={income} expenses={expenses} balance={balance} />
        </div>
        <div className="bottom">
          <form onSubmit={this.onAddTransactions} className="trans-card">
            <h1>Add Transaction</h1>

            <label htmlFor="Title">TITLE</label>
            <input
              value={titleInput}
              className="title-input"
              id="Title"
              type="text"
              placeholder="TITLE"
              onChange={this.onChangeTitle}
            />

            <label htmlFor="Amount">AMOUNT</label>
            <input
              value={amountInput}
              className="amount-input"
              id="Amount"
              type="text"
              placeholder="AMOUNT"
              onChange={this.onChangeAmount}
            />

            <label htmlFor="type">TYPE</label>
            <select
              id="type"
              className="type-input"
              value={typeId}
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(eachObject => (
                <option key={eachObject.optionId} value={eachObject.optionId}>
                  {eachObject.displayText}
                </option>
              ))}
            </select>

            <button type="submit" className="btn">
              Add
            </button>
          </form>
          <div className="down-right-card">
            <h1>History</h1>
            <div className="para-sty">
              <p className="p1">Title</p>
              <p className="p2">Amount</p>
              <p>Type</p>
            </div>
            <ul>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  eachTransaction={eachTransaction}
                  key={eachTransaction.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
