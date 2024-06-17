import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import counterSliceMoshe from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    productsSlice: productsSlice,
    counterSlice: counterSliceMoshe,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
