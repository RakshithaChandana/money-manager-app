// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyItem, onDelete} = props
  const {title, type, amount, id} = historyItem

  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="list-container">
      <p className="title-row-item">{title}</p>
      <p className="amount-row-item">Rs {amount}</p>
      <p className="type-row-item">{type}</p>
      <button
        type="button"
        className="delete-button "
        testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon "
        />
      </button>
    </li>
  )
}
export default TransactionItem
