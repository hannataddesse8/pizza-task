import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import pizzaReducer from "./pizzaSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    pizza: pizzaReducer,
  },
});
