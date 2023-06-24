import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addPizzas: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
