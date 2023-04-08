// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenominations = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button type="button" className="button" onClick={onClickDenominations}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
