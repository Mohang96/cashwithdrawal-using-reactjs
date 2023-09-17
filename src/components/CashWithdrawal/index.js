import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdraw = amount => {
    const {balance} = this.state
    const updatedBalance = balance - amount
    this.setState({balance: updatedBalance})
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="background">
        <div className="card-background">
          <div className="profile-container">
            <p className="profile">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-box">
            <div className="denominations-row">
              {denominationsList.slice(0, 2).map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  withdraw={this.withdraw}
                />
              ))}
            </div>
            <div className="denominations-row">
              {denominationsList.slice(2).map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  withdraw={this.withdraw}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
