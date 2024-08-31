import React, { useContext } from 'react';
import { GlobalContext } from '../../context';

export default function ContextButtonComponent() {
  const {handleThemeClick} = useContext(GlobalContext);

 
  return (
    <div>
      <button onClick={handleThemeClick}>Click Me!</button>
    </div>
  )
}
