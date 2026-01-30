import React, { useReducer, useContext, createContext } from "react";
import { contactReducer, initialState } from "../contactStore"; // Asegúrate de que el nombre coincida

//Creamos el "espacio vacío" para el Contexto
const StoreContext = createContext();

// Definimos el Provider se usa en el main
export const StoreProvider = ({ children }) => {
  // Aquí invocamos el Reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    // Repartimos el estado y el dispatch a través del "value"
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// Creamos un "Custom Hook" para usar el estado fácilmente (La antena)
export const useStore = () => useContext(StoreContext);
