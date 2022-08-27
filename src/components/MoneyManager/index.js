import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem'
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
    transactionhistory: [],
    giventitle: '',
    givenamount: '',
    giventype: 'INCOME',
    income: 0,
    expenses: 0,
  }

  titlechange = event => {
    this.setState({giventitle: event.target.value})
  }

  amountchange = event => {
    this.setState({givenamount: event.target.value})
  }

  typechange = event => {
    this.setState({giventype: event.target.value})
  }

  addtransaction = event => {
    event.preventDefault()
    const {
      transactionhistory,
      giventitle,
      givenamount,
      giventype,
      income,
      expenses,
    } = this.state
    const newtransaction = {
      id: uuidv4(),
      title: giventitle,
      amount: givenamount,
      type: giventype === 'INCOME' ? 'Income' : 'Expenses',
    }
    const updatedincome =
      giventype === 'INCOME' ? income + parseInt(givenamount) : income
    const updatedexpenses =
      giventype === 'EXPENSES' ? expenses + parseInt(givenamount) : expenses

    const newtransactionlist = [...transactionhistory, newtransaction]

    this.setState({
      transactionhistory: newtransactionlist,
      giventitle: '',
      givenamount: '',
      giventype: 'INCOME',
      income: updatedincome,
      expenses: updatedexpenses,
    })
  }

  deletetransaction = (id, amount, type) => {
    const {transactionhistory, income, expenses} = this.state

    const newlist = transactionhistory.filter(each => each.id !== id)

    const updatedincome = type === 'Income' ? income - parseInt(amount) : income
    const updatedexpenses =
      type === 'Expenses' ? expenses - parseInt(amount) : expenses

    this.setState({
      transactionhistory: newlist,
      income: updatedincome,
      expenses: updatedexpenses,
    })
  }

  render() {
    const {
      transactionhistory,
      giventitle,
      givenamount,
      giventype,
      income,
      expenses,
    } = this.state
    const balance = income - expenses

    return (
      <div className="bg-container">
        <div className="money-manager-container">
          <div className="title-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="description">
              Welcome back to your{' '}
              <span className="span-tag">Money Manager</span>{' '}
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              income={income}
              expenses={expenses}
              balance={balance}
            />
          </div>
          <div className="transaction-history-container">
            <div className="transaction-container">
              <form className="transaction-form" onSubmit={this.addtransaction}>
                <h1 className="form-heading">Add Transaction</h1>
                <label htmlFor="title" className="title-label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="title-input"
                  placeholder="TITLE"
                  onChange={this.titlechange}
                  value={giventitle}
                />
                <label htmlFor="amount" className="amount-label">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="amount-input"
                  placeholder="AMOUNT"
                  onChange={this.amountchange}
                  value={givenamount}
                />
                <label htmlFor="type" className="type-label">
                  TYPE
                </label>
                <select
                  id="type"
                  name="type"
                  className="dropdown"
                  onChange={this.typechange}
                  value={giventype}
                >
                  <option value="INCOME" className="dropdown-income">
                    Income
                  </option>
                  <option value="EXPENSES" className="dropdown-expenses">
                    Expenses
                  </option>
                </select>
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="history-records">
                <ul className="history-table">
                  <li className="heading-row">
                    <p className="title-heading">Title</p>
                    <p className="amount-heading">Amount</p>
                    <p className="type-heading">Type</p>
                  </li>
                  {transactionhistory.map(each => (
                    <TransactionItem
                      item={each}
                      key={each.id}
                      deletetransaction={this.deletetransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
