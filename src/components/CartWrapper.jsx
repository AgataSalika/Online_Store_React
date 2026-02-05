import React from 'react'
import CartItem from './CartItem/CartItem';

const CartWrapper = ({goods, increment, decrement}) => {
  return (
    <div>
    <div className="cart-wrapper">
          {goods.map(function (el) {
            let photoSrc = `/images/${el.cardPhoto}`;
            return (
        <CartItem photoSrc = {photoSrc} el = {el} increment={increment} decrement = {decrement}/>
            );
          })}
        </div>
    </div>
  )
}

export default CartWrapper