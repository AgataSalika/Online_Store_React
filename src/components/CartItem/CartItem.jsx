import React from 'react'

const CartItem = ({photoSrc, el, increment, decrement}) => {
  return (
    <div className="cart-item">
                <img
                  className="product-img"
                  alt="shop-card"
                  src={photoSrc}
                ></img>

                 <div className="priceNameCntr">
                      <div className="productCartPrice">
                      {el.productPrice} <span>рублей</span></div>
                      <div>{el.productTitle}</div>
                 </div>
                  <div className="productFlexCntr">
                      <div className="productFlex">
                        <button
                          onClick={function () {
                            decrement(el.id);}}>
                          -
                        </button>
                        <span>{el.count}</span>
                        <button
                          onClick={function () {
                            increment(el.id);
                          }}
                        >
                          +
                        </button>
                      </div>

                      <div className="totalPrice">
                      {el.productPrice * el.count} рублей
                    </div>
                  </div>
              </div>
  )
}

export default CartItem