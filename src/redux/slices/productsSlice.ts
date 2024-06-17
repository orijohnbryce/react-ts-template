import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/product-type";

export interface ProductsState {
  products: ProductType[];
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setProd: (state, action) => {
      state.products = action.payload;
    },
    addProd: (state, action) => {
      state.products.push(action.payload);
    },
    removeProd: (state, action) => {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload.id) {
          state.products.splice(i, 1);
          break;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProd, addProd, removeProd } = productsSlice.actions;

export default productsSlice.reducer;
