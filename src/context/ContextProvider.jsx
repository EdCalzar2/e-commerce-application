import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

export default function ContextProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, []);
  const [myItems, setMyItems] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "AddOrder":
          return [...state, action.order];
        default:
          return state;
      }
    },
    []
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, myItems, setMyItems }}>
      {children}
    </CartContext.Provider>
  );
}