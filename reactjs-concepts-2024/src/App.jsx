import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/classbasedcomponent';
import FunctionalComponent from './components/functionalcomponent';
import ProductList from './components/products/index';
import Users from './components/users';
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import UseReducerExample from './components/users/use-reducer-example';
import FormComponent from './components/Forms';


const dummyProductData = ['Product1', 'Product2', 'Product3']

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <ClassBasedComponent/>
      <FunctionalComponent/> */}
      {/* <ProductList name="Sangeeta" city="Hyderabad"  listofProducts={dummyProductData} /> */}
      {/* <Users/> */}
      {/* <ContextButtonComponent/>
      <ContextTextComponent/> */}
      {/* <UseReducerExample/> */}
      <FormComponent/>
    </div>
  )
}

export default App
