import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withdraw} = props
  const {value} = denominationDetails
  const withdrawAmount = () => {
    withdraw(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={withdrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
