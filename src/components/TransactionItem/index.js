// Write your code here
import './index.css'

const TransactionItem = props => {
  const {item, deletetransaction} = props
  const {id, title, amount, type} = item

  const deletetriggered = () => {
    deletetransaction(id, amount, type)
  }

  return (
    <li className="transaction-row">
      <p className="transaction-title">{title}</p>
      <p className="transaction-amount">{`Rs ${amount}`}</p>
      <p className="transaction-type">{type}</p>
      <p>
        <button
          type="button"
          testid="delete"
          className="delete-button"
          onClick={deletetriggered}
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </p>
    </li>
  )
}

export default TransactionItem
