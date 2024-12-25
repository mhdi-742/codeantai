import React, { useEffect, useState, useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const[index,setindex]=useState(0);
  return (
    <AppContext.Provider
      value={{
       index,
       setindex
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
