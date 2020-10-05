import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cart from "./Cart";
import Sort from "./Sort";
import Fillter from "./Fillter";
import Shopping from "./Shoppinglist";
import "./App.css";
import Axios from "axios";

function App() {
    const [Sdata, setSdata] = useState([]);
    const [allData, setAllData] = useState([]);
    const [maxVal, setMaxVal] = useState(50000);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await Axios.get(
                `https://my-json-server.typicode.com/prograk/demo/items`
            );
            setSdata(res.data);
            setAllData(res.data);
        }
        getData();
    }, []);

    const searchData = (e) => {
      const searchFilterData = allData.filter((data) => {
          return data.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setSdata(prevState => searchFilterData);
    }

    const sortData = (e) => {
        setMaxVal(e.target.value);
        const searchFilterData = allData.filter((data) => {
            if(100 < data.price.actual && data.price.actual < e.target.value){
                return data;  
            }
        });
        setSdata(prevState => searchFilterData);
    }

    const addToCart = (id) => {
        let productToAdd = parseInt(id) - 1;
        // setCart([allData[productToAdd]]);
        setCart(prevState => [...cart, allData[productToAdd]]);
    }
    
    return (
        <>
            <Header searchData={searchData} totalItem={cart.length}/>
            <div className="wrapper">
                <div className="row">
                    <div className="col2">
                        <Fillter sortData={sortData} maxVal={maxVal}/>
                    </div>
                    <div className="col10">
                        <Sort shortp ="low to hight" onClick={sortData}  />
                        <div className="shopping">
                            {Sdata.map(function ecart(val) {
                                return (
                                    <Shopping
                                        key={val.id}
                                        imgs={val.image}
                                        itemname={val.name}
                                        price={val.price.actual}
                                        rprice={val.price.display}
                                        discount={val.discount}
                                        addcart="Add to cart"
                                        addInCart={() => addToCart(val.id)}
                                    ></Shopping>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <Cart cart={cart}/>
            </div>
            
        </>
    );
}

export default App;