import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  return (
    <div className="style-col">
      <div className="bg-1">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs{balance}</p>
        </div>
      </div>

      <div className="bg-2">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs{income}</p>
        </div>
      </div>

      <div className="bg-3">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs{expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
