import { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const testing = {
    testing: true,
  };
  return (
    <AppContext.Provider value={{ testing }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export {AppProvider,useAppContext}
