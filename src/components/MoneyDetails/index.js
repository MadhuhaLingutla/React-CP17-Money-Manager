// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div className="balance-content-container">
          <p className="balance-name">Your Balance</p>
          <p
            className="balance-amount"
            testid="balanceAmount"
          >{`Rs ${balance}`}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="income-image"
        />
        <div className="income-content-container">
          <p className="income-name">Your Income</p>
          <p
            className="income-amount"
            testid="incomeAmount"
          >{`Rs ${income}`}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="expenses-image"
        />
        <div className="expenses-content-container">
          <p className="expenses-name">Your Expenses</p>
          <p
            className="expenses-amount"
            testid="expensesAmount"
          >{`Rs ${expenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
