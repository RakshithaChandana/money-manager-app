import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

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

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onDelete = id => {
    const {transactionList} = this.state
    const filteredTransactionList = transactionList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({transactionList: filteredTransactionList})
  }

  calculateIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = parseInt(0)
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      }
    })
    return incomeAmount
  }

  calculateBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = parseInt(0)

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        balanceAmount += parseInt(eachTransaction.amount)
      } else {
        balanceAmount -= parseInt(eachTransaction.amount)
      }
    })
    return balanceAmount
  }

  calculateExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = parseInt(0)
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })
    return expensesAmount
  }

  onAddButton = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = typeOption
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newHistory],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    const {title, amount, optionId, transactionList} = this.state
    const incomeAmount = this.calculateIncome()
    const balanceAmount = this.calculateBalance()
    const expenseAmount = this.calculateExpenses()

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="name-container">
            <h1 className="name">Hi, Richard</h1>
            <p className="paragraph">
              Welcome back to your{' '}
              <span className="money-manager-heading">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            incomeAmount={incomeAmount}
            balanceAmount={balanceAmount}
            expenseAmount={expenseAmount}
          />
          <div className="add-history-container">
            <form
              className="add-transaction-container"
              onSubmit={this.onAddButton}
            >
              <h1 className="add-transaction-heading ">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                className="input-element"
                onChange={this.onTitleChange}
                value={title}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="amount"
                className="input-element"
                onChange={this.onAmountChange}
                value={amount}
              />
              <label htmlFor="options" className="label">
                TYPE
              </label>
              <select
                id="options"
                className="input-element"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="history-container">
              <h1 className="add-transaction-heading">History</h1>
              <div className="title-amount-type-container">
                <p className="title-row">Title</p>
                <p className=" title-row amount-row">Amount</p>
                <p className="title-row type-row">Type</p>
              </div>
              <ul className="history-item-container">
                {transactionList.map(eachItem => (
                  <TransactionItem
                    historyItem={eachItem}
                    onDelete={this.onDelete}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
