import React from 'react'
import { ShopCardList } from '../components/ShopCardList/ShopCardList'

const Main = ({data, addGood,searchItem}) => {
  return (
    <div>
      <h1 className='main-title'>WarmStyle</h1>
    <ShopCardList data={data} addGood={addGood} searchItem={searchItem}/>
    
    </div>
  )
}

export default Main