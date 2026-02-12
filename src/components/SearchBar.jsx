import React from "react";
import { useState } from "react";

const SearchBar = ({searchItem, setSearchedGoods, data}) => {
  const [search, setSearch]= useState('')
  
  return (
    <div className="search-bar-container">
      <form className="search-form">
        <div className="search-input-wrapper">
          <input onChange={function (event) {
            setSearch(event.target.value)
          }}
            type="text"
            className="search-input"
            placeholder="Поиск товаров..."
            value = {search}
          />
          <button onClick={ (event) => {
            event.preventDefault()
            searchItem(search)
          
          } } type="submit" className="search-button">
            Найти
          </button>

          <button className="show-all-goods search-button" onClick={ ()=> setSearchedGoods(data)}>Показать все товары</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
