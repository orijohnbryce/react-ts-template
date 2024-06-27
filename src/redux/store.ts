import { configureStore } from "@reduxjs/toolkit";
import authSliceMoshe from "./slices/authSlice";


// store, made of all slices
export const store = configureStore({
    reducer: {
        authSlicerDavid: authSliceMoshe,
        // productsSlice: productsSlice,
    }
})

// for typing
export type RootState = ReturnType<typeof store.getState>;
