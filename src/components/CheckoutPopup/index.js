import Popup from 'reactjs-popup'
import {useState} from 'react'
import 'reactjs-popup/dist/index.css'
import './index.css'

const CheckOutPopup = props => {
  const {total, item} = props
  const [open, setOpen] = useState(false)
  let count = 0
  item.forEach(eachCartItem => {
    count += eachCartItem.quantity
  })

  const handleChange = event => {
    if (event.target.value === 'Cash on Delivery') {
      setOpen(true)
    }
  }

  return (
    <div className="popupPage">
      <h2>Order Summary</h2>
      <p>No.of Items : {count}</p>
      <p>Total Amount : {total} </p>
      <div>
        <label htmlFor="payment">Payment method:</label>

        <select id="payment" onChange={handleChange}>
          <option value="Card">Card</option>
          <option value=" Net Banking" disabled>
            Net Banking
          </option>
          <option value="UPI">UPI</option>
          <option value="Wallet">Wallet</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>

      <Popup
        trigger={
          open ? (
            <button type="button" className="btn">
              Confirm Order
            </button>
          ) : (
            <button type="button" className="btn" disabled>
              Confirm Order
            </button>
          )
        }
        position="right center"
        modal
      >
        <div className="confirmMsg">
          Your order has been placed successfully
        </div>
      </Popup>
    </div>
  )
}

export default CheckOutPopup
