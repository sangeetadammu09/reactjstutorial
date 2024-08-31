import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context';

export default function ContextTextComponent() {
 const {theme} = useContext(GlobalContext);
  return (
    <div>
       <h1 style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "blue" : "yellow",
      }}>I am from Context Text Component</h1>
    </div>
  )
}
