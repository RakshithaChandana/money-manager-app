// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expenseAmount} = props
  return (
    <div className="money-details-container">
      <div className="balance-container ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="container">
          <p className="heading">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="balance-container-2 ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="container">
          <p className="heading">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="balance-container-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="container">
          <p className="heading">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
