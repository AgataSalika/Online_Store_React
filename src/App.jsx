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
    //data-массив со всеми товарами
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
  //переменная "отображаемые товары", функция, чтобы менять отображаемые товары = передаем в нее массив всех товаров

  const [goods, setGoods] = useState([]);
  //массив "товары", ф-я, чтобы менять все товары = передаем туда пустой массив
  function addGood(id) {
    // ф-я добавитьТовар (принимает id)
    let foundItem = goods.filter(function (el) {
      //результатом foundItem будет массив goods.к нему применили фильтр (по элементу)
      return el.id === id;
      //вернули id элемента, кот и будет считаться id
    });
    if (foundItem.length === 0) {
      //если длина foundItem === 0
      let [newCartGood] = data.filter(function (el) {
        //новыйТоварвКорзине создается путем применения фильтра к массиву всех товаров
        if (el.id === id) {
          //если такой id уже есть 
          el.count = 1;
          //проставь el.count = 1
          return el;
          //верни el
        }
      });
      setGoods([...goods, newCartGood]);
      //в goods добавляем новыйТоварвКорзине
    } else {
      let index = goods.findIndex(function (el) {
        //index = товары, к которым применили встроенную ф-ю  findIndex (по элементу)
        return el.id === id;
        //верни id элемента - он и есть id
      });
      goods[index].count = goods[index].count + 1;
      //количество определенного товара (по индексу) = количество определенного товара (по индексу) + 1
    }
  }
  function increment(id) {
    //ф-я прибавитьТовар
    let index = goods.findIndex(function (el) {
      //создаем переменную index через ф-ю findIndex
      return el.id === id;
      //возвращаем id;
    });

    goods[index].count = goods[index].count + 1;
      //количество определенного товара (по индексу) = количество определенного товара (по индексу) + 1
    setGoods([...goods]);
    //меняем массив товаров путем добавления + 1

    // console.log(goods);
  }

  function decrement(id) {
     //ф-я убавитьТовар
    let index = goods.findIndex(function (el) {
         //создаем переменную index через ф-ю findIndex
      return el.id === id;
       //возвращаем id;
    });
    if (goods[index].count > 0) {
      // если количество определенного товара (по индексу) > 0
      goods[index].count = goods[index].count - 1;
      // уменьши если количество определенного товара (по индексу) - 1
      setGoods([...goods]);
      //меняем массив товаров путем убавления - 1
    }
  }

  function calculateSingleSum() {
    //ф-я посчитайСуммуТоваровОдногоВида
  let totalSum = 0;
  //общая сумма = 0
  for (let i = 0; i < goods.length; i++) {
    //цикл
    let sum = goods[i].productPrice * goods[i].count;
    //сумма = цена товара по индексу [i] умножить на количество определенного товара 
    totalSum = totalSum + sum;
    //общая сумма = общая сумма + sum
  }
  return totalSum
  //верни общ сумму
}

  function searchItem(str) {
    //ф-я найтиЕдиницуТовара (принимает строку)
  const result = data.filter ((el) => {
    //результат = товары, к которым применили фильтр
    return el.productTitle.toLowerCase().startsWith(str.toLowerCase().trim())
    //верни названиеТовара элемента.переведи в нижнйи регистр.начинается(строка в ниж регистре).укороти
  })
 setSearchedGoods(result)
 //передаем в  setSearchedGoods(result)
} 

  return (
    <div className="App">
      {/* <div className="container"> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Main addGood={addGood} data={searchedGoods} searchItem={searchItem} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/cart"
            element={
              <Cart setGoods = {setGoods} increment={increment} decrement={decrement} calculateSingleSum={calculateSingleSum} goods={goods}  setSearchedGoods={setSearchedGoods}
              data={data} />
            }
          />
        </Routes>
        <Footer/>
      {/* </div> */}
    </div>
    //выше указан шутка кот через Routes создает пути в меню и принимает необходимые пропсы
  );
}

export default App;
