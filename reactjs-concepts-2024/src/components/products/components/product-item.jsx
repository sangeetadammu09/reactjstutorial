import React from 'react';
import '../style.css';
import pstyles from './product-item.module.css';
 
function ButtonComponent(){
  return  <button className={pstyles.productbutton}>Click Me!</button>
}

export default function ProductItem(props) {
  console.log(props)
  let {singleProduct, keyVal} = props;
  return (
    <div>
      <h4 className="title" key={keyVal}>{singleProduct}</h4>
      <ButtonComponent/>
    </div>
  )
}
