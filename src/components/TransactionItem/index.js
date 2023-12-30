import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {id, title, amount, type} = eachTransaction

  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-item">
      <p className="p">{title}</p>
      <p className="p">Rs{amount}</p>
      <p className="para">{type}</p>
      <div>
        <button type="button" onClick={onClickDelete}>
          <img
            className="imgs"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
