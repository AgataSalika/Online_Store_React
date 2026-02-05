import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar";
import "./App.css";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";

import { useState } from "react";

function App() {
  const data = [
    {
      cardPhoto: "photo1.JPG",
      id: 1,
      productTitle: "Куртка",
      productCompany: "Вершина",
      productRating: "5 звезд",
      productPrice: 7800,
    },
    {
      cardPhoto: "photo2.JPG",
      id: 2,
      productTitle: "Пуховик",
      productCompany: "Вершина",
      productRating: "5 звезд",
      productPrice: 9800,
    },
     {
      cardPhoto: "photo3.JPG",
      id: 3,
      productTitle: "Ветровка",
      productCompany: "Вершина",
      productRating: "5 звезд",
      productPrice: 5600,
    },
     {
      cardPhoto: "photo4.webp",
      id: 4,
      productTitle: "Пуховик",
      productCompany: "Вершина",
      productRating: "5 звезд",
      productPrice: 7800,
    },
     {
      cardPhoto: "photo5.webp",
      id: 5,
      productTitle: "Куртка",
      productCompany: "Вершина",
      productRating: "5 звезд",
      productPrice: 5800,
    },
       {
      cardPhoto: "photo1.JPG",
      id: 6,
      productTitle: "Куртка",
      productCompany: "Вершина",
      productRating: "5 звезд",
      productPrice: 7800,
    },
    {
      cardPhoto: "photo2.JPG",
      id: 7,
      productTitle: "Пуховик",
      productCompany: "Вершина",
      productRating: "5 звезд",
      productPrice: 9800,
    },
     {
      cardPhoto: "photo3.JPG",
      id: 8,
      productTitle: "Ветровка",
      productCompany: "Вершина",
      productRating: "5 звезд",
      productPrice: 5600,
    }
  ];

  const [searchedGoods,setSearchedGoods] = useState(data)
  

  const [goods, setGoods] = useState([]);
  function addGood(id) {
    let foundItem = goods.filter(function (el) {
      return el.id === id;
    });
    if (foundItem.length === 0) {
      let [newCartGood] = data.filter(function (el) {
        if (el.id === id) {
          el.count = 1;
          return el;
        }
      });
      setGoods([...goods, newCartGood]);
    } else {
      let index = goods.findIndex(function (el) {
        return el.id === id;
      });
      goods[index].count = goods[index].count + 1;
    }
  }
  function increment(id) {
    let index = goods.findIndex(function (el) {
      return el.id === id;
    });

    goods[index].count = goods[index].count + 1;
    setGoods([...goods]);

    // console.log(goods);
  }

  function decrement(id) {
    let index = goods.findIndex(function (el) {
      return el.id === id;
    });
    if (goods[index].count > 0) {
      goods[index].count = goods[index].count - 1;
      setGoods([...goods]);
    }
  }

  function calculateSingleSum() {
  let totalSum = 0;
  for (let i = 0; i < goods.length; i++) {
    let sum = goods[i].productPrice * goods[i].count;
    totalSum = totalSum + sum;
  }
  return totalSum
}

  function searchItem(str) {
  const result = data.filter ((el) => {
    return el.productTitle.toLowerCase().startsWith(str.toLowerCase().trim())
  })
 setSearchedGoods(result)
} 

  return (
    <div className="App">
      {/* <div className="container"> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Main addGood={addGood} data={searchedGoods} searchItem={searchItem}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/cart"
            element={
              <Cart setGoods = {setGoods} increment={increment} decrement={decrement} calculateSingleSum={calculateSingleSum} goods={goods} />
            }
          />
        </Routes>
        <Footer/>
      {/* </div> */}
    </div>
  );
}

export default App;
