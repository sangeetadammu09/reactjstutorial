import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import classes from './style.module.css';
import TodoList from './components/todo-list';
import { Skeleton } from "@mui/material";



function App() {

  let [todoList, setTodoList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [errorFound, setErrorFound] = useState('');


  async function fetchToDoList(){
    try{
      
  //   fetch('https://dummyjson.com/todos').then(res => res.json())
  //  .then(console.log);
     setLoading(true);
     let apiResponse  = await fetch('https://dummyjson.com/todos');
     let response = await apiResponse.json()
     if(response.todos.length>0){
      setTodoList(response.todos);
      setLoading(false);
     }else{
      setTodoList([]);
      setLoading(false);
      setErrorFound('');
     }

    }catch(err){
      console.error(err);
     
    }

  }


  useEffect(() => {
     fetchToDoList();
  },[])

  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} />;
 

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>
        Simple Todo List
      </h1>  
        <TodoList listofTodoList={todoList}/>
    </div>
  )
}

export default App
