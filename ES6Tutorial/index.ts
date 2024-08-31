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
 
 //console.log(product); 

 const product2 = {
   description : "Product Apple Watch",
   id,
   productName,
   rating

 }
 
 const {description} = product2;
 console.log(description);

 let array = [2,3,4];
 let [fistele, secondele] = array;
 console.log(fistele);


 const arr1 = [1,2,3];
 const arr2 = [4,5,6];
 //Spread Operator
 const array3 = [...arr1, ...arr2]
 //console.log(array3);

 //rest operator

function getOperator(a:any,...c:any){
  //console.log(a, c);
 }

//console.log(getOperator(4,4,45,65,6546,6,454,55,54,45,54,543,5345))


//map,find,filter,every,some,indexof,findindexof,includes

const personarray = [
  {id:0, name : 'sunitha', age :30},
  {id:3, name : 'priya', age :35},
  {id:1, name : 'vinitha', age :40},
  {id:2, name : 'susmitha', age :45},
]

const maparray = personarray.map((x:any, index:any)=>{
  return x.name
})
//console.log(maparray);

const findarray = personarray.find((x:any, index:any)=>{
  return x.age == 30
})

//console.log(findarray);

const filterarray = personarray.filter((x:any, index:any)=>{
  return x.age == 30
})

//console.log(filterarray);

const somearray = personarray.some((x:any, index:any)=>{
  return x.age > 30
})


const everyarray = personarray.every((x:any, index:any)=>{
  return x.age > 30
})

const fruitsArray = ['apple','banana'];

console.log(fruitsArray.includes('apple')); // true






 