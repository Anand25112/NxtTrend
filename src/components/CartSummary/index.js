import Popup from 'reactjs-popup'

import CartContext from '../../context/CartContext'
import CheckOutPopup from '../CheckoutPopup'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>

            <div>
              <Popup
                trigger={
                  <button
                    type="button"
                    className="checkout-button d-sm-none w-50"
                  >
                    Checkout
                  </button>
                }
                position="top right"
              >
                <CheckOutPopup total={total} item={cartList} />
              </Popup>
            </div>
            <div>
              <Popup
                trigger={
                  <button type="button" className="checkout-button d-lg-none">
                    Checkout
                  </button>
                }
                position="top center"
              >
                <CheckOutPopup total={total} item={cartList} />
              </Popup>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
