import React from 'react'
import ShopCard from '../ShopCard/ShopCard';
import SearchBar from '../SearchBar';

export const ShopCardList = ({data, addGood, searchItem}) => {
  return (

    <div className='container'>
    <SearchBar searchItem={searchItem}/>
        <div className="card_list">
        {data.map(function (el) {
          return (
            
            <ShopCard addGood={addGood} el={el}
              // cardPhoto={el.cardPhoto}
              // productTitle={el.productTitle}
              // productCompany={el.productCompany}
              // productRating={el.productRating}
              // productPrice={el.productPrice}
            />
          );
        })}
      </div>

    </div>

  )
}

