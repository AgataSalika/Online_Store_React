
import classes from "./ShopCard.module.css";
import { useState } from "react";

const ShopCard = ({
  // productTitle,
  // productCompany,
  // productRating,
  // cardPhoto,
  // productPrice,
  el,
  addGood
}) => {
  let photoSrc = `/Online_Store_React/images/${el.cardPhoto}`;

  let [showText, setShowText] = useState(false)
  let [textBtn, setTextBtn] = useState('В корзину') 
  return (
  

        <div className={classes.productCard_wrapper}>
          <div className={classes.productCard_photo}>
            <img alt="shop-card" src={photoSrc}></img>
          </div>
          <div className={classes.productCard_price}>{el.productPrice} <span>рублей</span></div>
          <div className={classes.productCard_title}>{el.productTitle} </div>
          <div className={classes.productCard_company}>{el.productCompany}</div>
          <div className={classes.productCard_rating}>{el.productRating}</div>
        
          <button onClick={function() {
            setTextBtn ('В корзине')
            setShowText(true)
            setTimeout(function() {
              setShowText(false)
            },1000)
            addGood(el.id)
          }} className='productCard_btn'>{textBtn}</button>

          { showText === false ? '' : <p className="cart-info">Товар добавлен в корзину</p>}
        </div>
    
   
  );
};

export default ShopCard;
