import React from 'react';
import { useEffect, useState } from "react";
import ProductItem  from './components/product-item';

let initialState = false;
export default function ProductList(props) {
  const [ flag, setFlag] = useState(initialState);
  const [ count, setCount] = useState(0);
  const [ changeCountStyle, setchangeCountStyle] = useState(false);
  let   {name, city, listofProducts} = props;

  const handleToggleText =()=> {
    setFlag(!flag)
  }

  const handleCountIncrement = ()=> {
    setCount(count +1);
    if(count == 10){
         setchangeCountStyle(!changeCountStyle)
    }
  }

 
  return (
    <div>
      <h1>Ecommerce Products</h1>  
      {
        flag ? <h3>My name is {name} and i am from {city}</h3> : 
        <h3>Hello World!</h3>
      }

      <button onClick={handleToggleText}>Toggle Text</button>

      <div>
        <h3 style={{color : changeCountStyle ? 'blue' : 'black',
                            fontSize : changeCountStyle ? '30px': '12px'}}>Count is {count}</h3>
        <button onClick={handleCountIncrement}>Increase Count Value</button>
      </div>
      
     {/* <ul>
     {
        listofProducts.map((item,index)=>
            <ProductItem singleProduct={item} keyVal={index}/>
        )
      }

     </ul> */}
     
    </div>
  )
}
