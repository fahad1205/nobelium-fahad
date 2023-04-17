import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="states">
    {children}
  </AppContext.Provider>
}

const GlobalContext = () =>{
  return useContext(AppContext);
}

export{AppContext, AppProvider , GlobalContext};