import React, { useContext, useReducer } from "react";
import reducer from "../reducers/app_reducer";

const initialState = {};

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};
