import { createContext, useState } from "react";


export const GlobalContext = createContext(null);

//create the global state that receipe component as a children
function GlobalState({children}){

    const [theme, setTheme] = useState('light')

    const handleThemeClick = () => {
      setTheme(theme == 'light' ? 'dark' : 'light');
   }
    return (
        <GlobalContext.Provider value={{theme,handleThemeClick}}>
          {children}
        </GlobalContext.Provider>
      );
}


export default GlobalState