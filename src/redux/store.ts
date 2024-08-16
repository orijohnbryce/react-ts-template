import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";


// store, made of all slices
export const store = configureStore({
    reducer: {
        authSlicer: authSlice,
        // productsSlice: productsSlice,
    }
})

// for typing
export type RootState = ReturnType<typeof store.getState>;
