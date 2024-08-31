// Some important point of ES6:

//  Logical AND (&&) and logical OR(||)
//  Template literal
//  Tenary operator
//  Object Destructing
 
 
 const id =1;
 const productName = "Product Apple Watch"
 const rating =5;
 
 const product = {
  id,
  productName,
  rating
  }
  
  console.log(product); 

  const product2 = {
    description : "Product Apple Watch",
    id,
    productName,
    rating

  }
  
  const {description} = product2;

  console.log(description);