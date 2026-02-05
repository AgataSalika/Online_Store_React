import React from "react";
import { useState } from "react";
import Modal from "../components/UI/Modal/Modal";
import TotalSum from "../components/TotalSum";
import CartWrapper from "../components/CartWrapper";
import BtnFlex from "../components/BtnFlex";

const Cart = ({
  goods,
  increment,
  decrement,
  calculateSingleSum,
  setGoods,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  if (goods.length === 0) {
    return (
      <div className="container emptyCart minHeight">
        <p>Корзина пуста</p>
      </div>
    );
  } else {
    return (
      <div className="container minHeight">
        <CartWrapper goods={goods} increment={increment} decrement={decrement} />

        <TotalSum calculateSingleSum={calculateSingleSum} />

        <BtnFlex setShowPopUp={setShowPopUp}/>

        {showPopUp === true ? (
          <Modal setShowPopUp={setShowPopUp}>
            <h2>Точно удалить из корзины?</h2>
            <button
              onClick={function () {
                setGoods([]);
              }}
              className="OKBtn"
            >
              OK
            </button>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
};

export default Cart;
