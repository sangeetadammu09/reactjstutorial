import React from 'react'
import TodoItem from '../todo-item';
import classes from '../../style.module.css';
import TodoDialog from '../todo-dialog';
import { useEffect, useState } from 'react';

export default function TodoList(props) {

  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

 async function fetchDetailsOfCurrentTodo(id){
     console.log(id)
     try {
    const apiResponse = await fetch(`https://dummyjson.com/todos/${id}`);
    const result = await apiResponse.json();
    console.log(result)
    if(result){
      setTodoDetails(result);
      setOpenDialog(true);
    }else{
      setTodoDetails(null);
      setOpenDialog(false);
    }
      
     } catch (error) {
       console.log(error)
     }
    
  }

  const listofTodos = props.listofTodoList
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.todoListWrapper}>    
      {
        listofTodos && listofTodos.length > 0 ? 
        listofTodos.map(item => (
          <TodoItem currentTodoItem={fetchDetailsOfCurrentTodo} todoItem={item} key={item.id} />
        )) : <p>No Todo List Found</p>
      }    
      
    </div>
    <TodoDialog  setOpenDialog={setOpenDialog} openDialog={openDialog}
        todoDetails={todoDetails} setTodoDetails={setTodoDetails}/>
    </div>
    
  
  )
}
