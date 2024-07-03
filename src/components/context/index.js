import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./Heart/HeartSlice";
import cartSlice from "./Cart/CartSlice";
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
