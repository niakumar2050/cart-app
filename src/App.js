import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Cart from "./Cart";
import Sort from "./Sort";
import Fillter from "./Fillter";
import Shopping from "./Shoppinglist";
// import Sdata from "./Sdata";
import './App.css';
import Axios from 'axios';

// function ecart(val){
//   return(
//     <Shopping
//            imgs={val.imgss}
//            itemname={val.itemname}
//            price={val.price}
//            rprice={val.rprice}
//            discount={val.discount}
//            addcart ={val.addcart}
//            ></Shopping>
//   )
// }



function App() {

  const [Sdata, setSdata] = useState([]);
  useEffect(() =>{
    async function getData(){
      const res =  await Axios.get(`https://my-json-server.typicode.com/prograk/demo/items`);
      
      setSdata(res.data);
     
      
      
    }
    getData();
  })
  
  return (
    <>
      <Header></Header>
      <div className="wrapper">
        <div className="row">
          <div className="col2">
          <Fillter></Fillter>
          </div>
          <div className="col10">
          <Sort></Sort>
          <div className="shopping">
           {Sdata.map(function ecart(val){
             return(
              <Shopping
                      key={val.id}
                     imgs={val.image}
                     itemname={val.itemname}
                     price={val.price.actual}
                     rprice={val.price.display}
                     discount={val.discount}
                     addcart ="Add to cart"
                     ></Shopping>
            )

           })}
           </div>
          </div>
        </div>
      </div>
      <Cart></Cart>
      
      
      
      

    </>
  );
}

export default App;
